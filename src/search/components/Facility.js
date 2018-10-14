import React from 'react';
import PropTypes from 'prop-types'

class Facility extends React.Component {

    render() {
        return (
            <div className={'Facility'}>
                Facility
            </div>
        )
    }
}

Facility.propTypes = {
    name: PropTypes.string.isRequired
};

export default Facility;