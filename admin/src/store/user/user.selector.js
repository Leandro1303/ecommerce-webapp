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
