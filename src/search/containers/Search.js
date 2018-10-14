import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchPhraseChanged } from '../actions'
import Search from '../components/Search'

const mapStateToProps = (state, ownProps) => {
   return {
      // props from state
      results: state.search.get('results').toJS(),
      searchPhrase: state.search.get('searchPhrase')
   }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    searchPhraseChanged
}, dispatch);


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Search)