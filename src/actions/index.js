import { ADD_USER, LOAD_USERS, API_ERROR, IS_LOADING, DELETE_USER } from '../constants/action-types';

function fetchHandler(res) {
  if (res.status >= 400 && res.status < 600) {
    return Promise.reject(res);
  }
  return res.json();
}

export function addUser(payload) {
  return function (dispatch) {
    dispatch({ type: IS_LOADING });
    return fetch('https://5e90b2f02810f4001648b2b8.mockapi.io/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(fetchHandler)
      .then((json) => {
        dispatch({ type: ADD_USER, payload: json });
      })
      .catch((error) => {
        dispatch({ type: API_ERROR, error: `${error.status}: ${error.statusText}` });
      });
  };
}

export function deleteUser(id) {
  return function (dispatch) {
    dispatch({ type: IS_LOADING });
    return fetch(`https://5e90b2f02810f4001648b2b8.mockapi.io/data/${id}`, {
      method: 'DELETE',
    })
      .then(fetchHandler)
      .then((json) => {
        dispatch({ type: DELETE_USER, payload: json });
      })
      .catch((error) => {
        dispatch({ type: API_ERROR, error: `${error.status}: ${error.statusText}` });
      });
  };
}

export function getUsers() {
  return function (dispatch) {
    dispatch({ type: IS_LOADING });
    return fetch('https://5e90b2f02810f4001648b2b8.mockapi.io/data')
      .then(fetchHandler)
      .then((json) => {
        dispatch({ type: LOAD_USERS, payload: json });
      })
      .catch((error) => {
        dispatch({ type: API_ERROR, error: `${error.status}: ${error.statusText}` });
      });
  };
}
