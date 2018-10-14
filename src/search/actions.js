export const SEARCH_PHRASE_CHANGED = 'SEARCH_PHRASE_CHANGED';
export const SEARCH_RESULTS_REFRESH = 'SEARCH_RESULTS_REFRESH';

export const searchPhraseChanged = (searchPhrase) => {
    return dispatch => {
        dispatch({
            type: SEARCH_PHRASE_CHANGED,
            searchPhrase
        })
        searchResultsRefresh()(dispatch);
    }
}

export const searchResultsRefresh = () => {
    return dispatch => {
        dispatch({
            type: SEARCH_RESULTS_REFRESH
        })
    }
}