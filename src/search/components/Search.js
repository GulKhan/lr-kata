import React from 'react';
import PropTypes from 'prop-types'
import SearchResultsItem from './SearchResultItem'

class Search extends React.Component {

    render() {
        return (
            <div className={'Search'}>
                <h2>Hotel Search</h2>

                <label htmlFor={'facilities-search'}>
                    <input id='facilities-search' type={'text'} placeholder={'Search for facilities...'} />
                </label>

                {this.props.results && this.props.results.map((result, i) =>
                    <SearchResultsItem key={i} {...result}/>
                )}
            </div>
        )
    }
}

Search.propTypes = {
    results: PropTypes.array.isRequired
}

export default Search;