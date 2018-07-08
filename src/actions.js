import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
    } from './constants';


export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

export const requestRobots = disptch => {
  disptch({type: REQUEST_ROBOTS_PENDING})
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => disptch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => disptch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
};