import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import searchReducer  from './search/reducer'

export default combineReducers({
   routing: routerReducer,
   searchReducer
})