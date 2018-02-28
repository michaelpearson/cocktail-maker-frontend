import { combineReducers } from 'redux'
import counter from './counter'

const cocktailMakerApp = combineReducers({
  counter
});


export default cocktailMakerApp;