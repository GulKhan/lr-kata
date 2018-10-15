import React from 'react';
import PropTypes from 'prop-types'

class StarRating extends React.Component {

    render() {
        return (
            <div className={'StarRating'}>
                {this.props.starRating &&
                    this.renderStars(this.props.starRating)
                }
            </div>
        )
    }

    renderStars(numStars) {
        let stars = [];
        for (let i = 0; i < numStars; i++) {
            stars.push(<img key={i} className={'star'} src={'/images/star.png'} alt={'star'}/>);
        }
        return stars;
    }
}



StarRating.propTypes = {
    starRating: PropTypes.number.isRequired
};

export default StarRating;