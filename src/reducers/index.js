import {
  ADD_USER,
  LOAD_USERS,
  API_ERROR,
  IS_LOADING,
  DELETE_USER,
} from '../constants/action-types';

const initialState = {
  users: [],
  error: null,
  isLoading: false,
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_USER) {
    return Object.assign({}, state, {
      users: state.users.concat(action.payload),
      isLoading: false,
      error: null,
    });
  }

  if (action.type === LOAD_USERS) {
    return Object.assign({}, state, {
      users: action.payload,
      isLoading: false,
      error: null,
    });
  }

  if (action.type === API_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      isLoading: false,
    });
  }

  if (action.type === DELETE_USER) {
    return Object.assign({}, state, {
      users: state.users.filter((u) => u.name !== action.payload.name),
      error: null,
      isLoading: false,
    });
  }

  if (action.type === IS_LOADING) {
    return Object.assign({}, state, {
      isLoading: true,
    });
  }

  return state;
}

export default rootReducer;
