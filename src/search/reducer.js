import {SEARCH_PHRASE_CHANGED, SEARCH_RESULTS_REFRESH} from './actions';

const { fromJS } = require('immutable');

export const initialState = fromJS({
    searchPhrase: '',
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
    ],
    hotels: [
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


});

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PHRASE_CHANGED:
            return state.set('searchPhrase', action.searchPhrase);
        case SEARCH_RESULTS_REFRESH:
            // filter the available hotels and set as the results
            let searchPhrase = state.get('searchPhrase');
            return state.set('results', state.get('hotels').filter(
                (hotel) => {
                    return hotel.get('facilities').filter((facility) => {
                        return facility.indexOf(searchPhrase) !== -1;
                    })
                    .count() > 0
                }
            ));
        default:
            return state;
    }
}
