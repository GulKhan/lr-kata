import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Search from '../components/Search'

const mapStateToProps = (state, ownProps) => {
   return {
      // props from state
      results: state.search.get('results').toJS()
   }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Search)