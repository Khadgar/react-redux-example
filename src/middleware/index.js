import { ADD_USER } from '../constants/action-types';
import { v4 as uuidv4 } from 'uuid';

export function generateIdMiddleware({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      if (action.type === ADD_USER) {
        action.payload.id = uuidv4();
      }
      return next(action);
    };
  };
}
