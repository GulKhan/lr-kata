import React from 'react';
import PropTypes from 'prop-types'
import SearchResultsItem from './SearchResultItem'

class Search extends React.Component {

    render() {
        return (
            <div className={'Search'}>

                {this.props.results && this.props.results.map((result, i) =>
                    <SearchResultsItem key={i}/>
                )}
            </div>
        )
    }
}

Search.propTypes = {
    results: PropTypes.array.isRequired
}

export default Search;