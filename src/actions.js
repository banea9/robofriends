import { CHANGE_SEARCH_FIELD } from "./constants";
import { REQUEST_ROBOTS_PENDING } from "./constants";
import { REQUEST_ROBOTS_SUCCESS } from "./constants";
import { REQUEST_ROBOTS_FAILED } from "./constants";

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload: err}))
};
