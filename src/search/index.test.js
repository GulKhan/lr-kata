import React from 'react';
import expect from 'expect';
import reducer from './reducer';
import { Provider } from 'react-redux'
import { configure, mount } from 'enzyme';
import store from '../store'
import Adapter from 'enzyme-adapter-react-16';

import Search from './containers/Search'

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

it ('The Search component displays some results', () => {

    let wrapper = mount(
        <Provider store={store}>
            <Search />
        </Provider>
    );
    expect(wrapper.find('SearchResultItem').length).toBe(3);

});