import React from 'react';
import expect from 'expect';
import reducer from './reducer';
const { fromJS } = require('immutable');

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