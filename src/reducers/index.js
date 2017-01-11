import { combineReducers } from 'redux';
import reducerUsers from './reducer_users';

const rootReducer = combineReducers({
  users: reducerUsers
});

export default rootReducer;
