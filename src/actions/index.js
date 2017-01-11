import axios from 'axios';

export const FETCH_RECENT_USERS = 'FETCH_RECENT_USERS';

export function fetchRecentUsers() {
  const URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
  const request = axios.get(URL);
console.log(request);
  return {
    type: FETCH_RECENT_USERS,
    payload: request
  };
}

export const FETCH_ALLTIME_USERS = 'FETCH_ALLTIME_USERS';

export function fetchAllTimeUsers() {
  const URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
  const request = axios.get(URL);

  return {
    type: FETCH_ALLTIME_USERS,
    payload: request
  };
}
