import React from 'react';
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import Facility from './Facility'

class SearchResultItem extends React.Component {

    render() {
        return (
            <div className={'SearchResultsItem'}>
                <h2 className={'name'}>{this.props.name}</h2>
                <StarRating starRating={this.props.starRating}/>

                {this.props.facilities &&
                    <p>Facilities: </p>
                }
                {this.props.facilities.map((facility, i) => {
                    return (
                        <Facility key={i} name={facility}/>
                    )
                })}

            </div>
        )
    }
}

SearchResultItem.propTypes = {
    name: PropTypes.string.isRequired,
    starRating: PropTypes.number.isRequired,
    facilities: PropTypes.array.isRequired,
};

export default SearchResultItem;