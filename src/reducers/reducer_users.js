import { FETCH_RECENT_USERS, FETCH_ALLTIME_USERS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RECENT_USERS:
      console.log(action.payload);
      return state.concat(action.payload.data);
    case FETCH_ALLTIME_USERS:
      return state.concat(action.payload.data);
    default:
      return state;
  }
}
