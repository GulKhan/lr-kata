import React from 'react';
import expect from 'expect';
import reducer, { initialState } from './reducer';
import { Provider } from 'react-redux'
import { configure, mount, shallow } from 'enzyme';
import store from '../store'
import { SEARCH_PHRASE_CHANGED, SEARCH_RESULTS_REFRESH } from './actions'
import Adapter from 'enzyme-adapter-react-16';

import Search from './containers/Search'
import { default as SearchComponent } from './components/Search'
import SearchResultItem from './components/SearchResultItem'
import StarRating from './components/StarRating'
import Facility from './components/Facility'

const { fromJS } = require('immutable');

configure({ adapter: new Adapter() });

it ('has an initial state', () =>  {

    let state = reducer(undefined, {});
    expect(state.get('results')).toEqual(fromJS([
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
    ]));

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

it ('has a search facilities filter field', () => {
    let wrapper = shallow(<SearchComponent results={[]} searchPhraseChanged={() => {}}/>);
    expect(wrapper.find('#facilities-search').exists()).toBe(true);
});

it ('can filter the results using searchPhraseChanged action', () => {
    const updateAction = {
        type: SEARCH_PHRASE_CHANGED,
        searchPhrase: 'car park'
    };
    let state = reducer(initialState, updateAction);
    expect(state.get('searchPhrase')).toEqual('car park');
})

it ('can filter the results using searchPhraseChanged action', () => {
    const searchPhraseRefreshAction = {
        type: SEARCH_PHRASE_CHANGED,
        searchPhrase: 'car'
    };
    const searchResultsRefreshAction = {
        type: SEARCH_RESULTS_REFRESH
    };
    let state = reducer(initialState, searchPhraseRefreshAction);
    state = reducer(state, searchResultsRefreshAction);
    expect(state.get('results').toJS().length).toEqual(2);
})

it ('can filter the results using the filter input field', () => {

    let wrapper = mount(
        <Provider store={store}>
            <Search />
        </Provider>
    );
    wrapper.find('#facilities-search').simulate('focus');
    wrapper.find('#facilities-search').simulate('change', { target: { value: 'car park' } });
    expect(wrapper.find('SearchResultItem').length).toBe(2);

});

it ('has a star rating filter field', () => {
    let wrapper = shallow(<SearchComponent results={[]} searchPhraseChanged={() => {}}/>);
    expect(wrapper.find('#sort-results').exists()).toBe(true);
});
it ('has a star rating filter field with ascending and descending options', () => {
    let wrapper = shallow(<SearchComponent results={[]} searchPhraseChanged={() => {}}/>);
    let sort = wrapper.find('#sort-results');
    expect(sort.find('option[value="star-rating-asc"]').exists()).toBe(true);
    expect(sort.find('option[value="star-rating-desc"]').exists()).toBe(true);
});