import { createSelector } from 'reselect';

export const selectUserReducer = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);

export const selectUserErrorMessage = createSelector(
  [selectUserReducer],
  user => user.errorMessage
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
