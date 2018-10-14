import React from 'react';
import PropTypes from 'prop-types'

class StarRating extends React.Component {

    render() {
        return (
            <div className={'StarRating'}>
                <div className={'star'}/>
                <div className={'star'}/>
                <div className={'star'}/>
                <div className={'star'}/>
                <div className={'star'}/>
            </div>
        )
    }
}

StarRating.propTypes = {
    starRating: PropTypes.number.isRequired
}

export default StarRating;