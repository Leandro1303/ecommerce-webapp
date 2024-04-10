import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
  isLoading: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {...state, currentUser: payload};
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {...state, currentUser: null};
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return {...state, errorMessage: payload};
    default:
      return state;
  }
};

export default userReducer;
