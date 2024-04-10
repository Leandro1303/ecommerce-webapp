import { USER_ACTION_TYPES } from "./user.types.js";
import { createAction } from "../../utils/reducer/reducer.utils.js";

export const setCurrentUser = (user) =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

// NEW LINE
export const setIsUserDropdownOpen = (boolean) =>
    createAction(USER_ACTION_TYPES.SET_USER_DROPDOWN_OPEN, boolean);

export const googleSignInStart = () =>
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IS_START);

export const emailSignInStart = (email, password) =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password});

export const signInSuccess = (user) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FIALED, error);

export const signUpStart = (email, password, displayName) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
        email,
        password,
        displayName
    });

export const signUpSuccess = (user, additiodalDetails) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additiodalDetails });

export const signUpFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);