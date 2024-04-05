import { createSelector } from 'reselect';

export const selectUserReducer = state => state.user;

export const selectCurrentUSer = createSelector(
    [selectUserReducer],
    (user) => user.currentUser
);

export const selecIsUserOpen = createSelector(
    [selectUserReducer],
    (user) => user.isUserOpen
);

// NEW LINE
export const selectUserDropdown = createSelector(
    [selectUserReducer],
    (user) => user.dropdownOpen
);
