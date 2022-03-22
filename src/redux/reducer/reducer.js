import {combineReducers} from 'redux';
import registerReducer from './registerReducer';
import onLoginAction from './authReducer';

const Reducer = combineReducers({
  registerReducer,
  onLoginAction
});

export default Reducer;
