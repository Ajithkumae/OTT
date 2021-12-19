import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import ottReducer from './ottReducer';

export default combineReducers({
  loginReducer,
  ottReducer,
});
