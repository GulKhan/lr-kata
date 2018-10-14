import React from 'react';
import expect from 'expect';
import reducer from './reducer';
import { Provider } from 'react-redux'
import { configure, mount, shallow } from 'enzyme';
import store from '../store'
import Adapter from 'enzyme-adapter-react-16';

import Search from './containers/Search'
import SearchResultItem from './components/SearchResultItem'

const { fromJS } = require('immutable');

configure({ adapter: new Adapter() });

it ('has an initial state', () =>  {

    expect(reducer(undefined, {})).toEqual(fromJS({
        results: [
            {
                "name": "hotelone",
                "starRating": 5,
                "facilities": ["car park", "pool"]
            },
            {
                "name": "hoteltwo",
                "starRating": 3,
                "facilities": ["car park", "gym"]
            },
            {
                "name": "hotelthree",
                "starRating": 3,
                "facilities": []
            }

        ]
    }));

});

it ('displays some results', () => {

    let wrapper = mount(
        <Provider store={store}>
            <Search />
        </Provider>
    );
    expect(wrapper.find('SearchResultItem').length).toBe(3);

});

it ('displays the right information in a result item', () => {

    let wrapper = shallow(<SearchResultItem name={'Late Rooms'} starRating={5} facilities={['car park', 'pool']} />);
    expect(wrapper.find('.name').length).toBe(1);
    expect(wrapper.find('<StarRating/>').length).toBe(1);
    expect(wrapper.find('<Facility/>').length).toBe(2);

});