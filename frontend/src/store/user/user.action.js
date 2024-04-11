import { createAction } from '../../utils/reducer/reducer.utils.js';
import { USER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (user) =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

// NEW LINE
export const setIsUserDropdownOpen = (boolean) =>
createAction(USER_ACTION_TYPES.SET_USER_DROPDOWN_OPEN, boolean);

export const emailSignInStart = (credentials) =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, credentials);

export const signInSuccess = (user) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (errorMessage) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, errorMessage);

export const signUpStart = ({ email, password, name }) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
        email,
        password,
        name
    });

export const signUpSuccess = (credentias) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, credentias);

export const signUpFailed = (errorMessage) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, errorMessage);

export const signOutStart = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (errorMessage) =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, errorMessage);
