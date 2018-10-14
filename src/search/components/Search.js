import React from 'react';
import PropTypes from 'prop-types'
import SearchResultsItem from './SearchResultItem'

class Search extends React.Component {

    render() {
        return (
            <div className={'Search'}>
                <h2>Hotel Search</h2>

                <label htmlFor={'facilities-search'}>
                    <span>Search: </span>
                    <input
                        id='facilities-search'
                        type={'text'}
                        placeholder={'Search for facilities...'}
                        onChange={(event) => { this.props.searchPhraseChanged(event.target.value) }}
                        value={this.props.searchPhrase}
                    />
                </label>

                <label htmlFor={'sort-results'}>
                    <span>Sort: </span>
                    <select
                        id='sort-results'
                    >
                        <option value={'star-rating-asc'}>Star Rating (Ascending)</option>
                        <option value={'star-rating-desc'}>Star Rating (Descending)</option>
                    </select>
                </label>

                {this.props.results && this.props.results.map((result, i) =>
                    <SearchResultsItem key={i} {...result}/>
                )}
            </div>
        )
    }
}

Search.defaultProps = {
    searchPhrase: ''
};
Search.propTypes = {
    results: PropTypes.array.isRequired,
    searchPhrase: PropTypes.string,
    searchPhraseChanged: PropTypes.func.isRequired
}

export default Search;