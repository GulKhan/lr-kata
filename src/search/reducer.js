import {SEARCH_PHRASE_CHANGED, SEARCH_RESULTS_REFRESH, SORT_OPTION_CHANGED} from './actions';

const { fromJS } = require('immutable');

export const initialState = fromJS({
    searchPhrase: '',
    sortOption: 'star-rating-desc',
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
            if (!state.get('searchPhrase')) {
                return state.set('results', state.get('hotels'));
            }
            let searchPhrase = state.get('searchPhrase');
            return state.set('results', state.get('hotels').filter(
                (hotel) => {
                    return hotel.get('facilities').filter((facility) => {
                        return facility.indexOf(searchPhrase) !== -1;
                    })
                    .count() > 0
                }
            ));

        case SORT_OPTION_CHANGED:

            if (action.value) {
                state = state.set('sortOption', action.value);
            } else {
                // if no value passed then just apply the current value from state
                action.value = state.get('sortOption');
            }
            switch (action.value) {
                case 'star-rating-asc':
                    return state.set('results', state.get('results').sort(
                        (hotel1, hotel2) => {
                            let starRating1 = hotel1.get('starRating');
                            let starRating2 = hotel2.get('starRating');
                            if (starRating1 < starRating2) { return -1; }
                            if (starRating1 > starRating2) { return 1; }
                            if (starRating1 === starRating2) { return 0; }
                            return 0;
                        }
                    ));
                case 'star-rating-desc':
                    return state.set('results', state.get('results').sort(
                        (hotel1, hotel2) => {
                            let starRating1 = hotel1.get('starRating');
                            let starRating2 = hotel2.get('starRating');
                            if (starRating2 < starRating1) { return -1; }
                            if (starRating2 > starRating1) { return 1; }
                            if (starRating2 === starRating1) { return 0; }
                            return 0;
                        }
                    ));
                default:
                    return state;
            }

        default:
            return state;
    }
}
