import React from 'react';
import expect from 'expect';
import reducer from './reducer';
import { Provider } from 'react-redux'
import { configure, mount, shallow } from 'enzyme';
import store from '../store'
import Adapter from 'enzyme-adapter-react-16';

import Search from './containers/Search'
import SearchResultItem from './components/SearchResultItem'
import StarRating from './components/StarRating'
import Facility from './components/Facility'

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
    expect(wrapper.find('StarRating').length).toBe(1);
    expect(wrapper.find('Facility').length).toBe(2);

});

it ('displays the right star rating (5)', () => {
    let wrapper = shallow(<StarRating starRating={5} />);
    expect(wrapper.find('.star').length).toBe(5);
});
it ('displays the right star rating (0)', () => {
    let wrapper = shallow(<StarRating starRating={0} />);
    expect(wrapper.find('.star').length).toBe(0);
});
it ('displays the right star rating (3)', () => {
    let wrapper = shallow(<StarRating starRating={3} />);
    expect(wrapper.find('.star').length).toBe(3);
});

it ('displays the right facility name', () => {
    let wrapper = shallow(<Facility name={'car park'} />);
    expect(wrapper.text()).toBe('car park');
});