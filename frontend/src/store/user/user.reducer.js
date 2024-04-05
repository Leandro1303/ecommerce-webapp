import { USER_ACTION_TYPES } from "./user.types.js";

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
    // NEW LINE
    dropdownOpen: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {...state, currentUser: payload};
        // NEW LINE
        case USER_ACTION_TYPES.SET_USER_DROPDOWN_OPEN:
            return {
                ...state,
                dropdownOpen: payload
            };
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {...state, currentUser: null};
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
            return {...state, error: payload};
        default:
            return state;
    }
};
