import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchPhraseChanged, sortOptionChanged } from '../actions'
import Search from '../components/Search'

const mapStateToProps = (state, ownProps) => {
    return {
        // props from state
        results: state.search.get('results').toJS(),
        searchPhrase: state.search.get('searchPhrase'),
        sortOption: state.search.get('sortOption')
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    searchPhraseChanged,
    sortOptionChanged
}, dispatch);


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Search)