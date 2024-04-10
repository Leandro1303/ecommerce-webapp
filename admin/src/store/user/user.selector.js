import { createSelector } from 'reselect';

export const selectUserReducer = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => {
    console.log("selectCurrentUser", user.currentUser)
    return user.currentUser
});

export const selectUserErrorMessage = createSelector(
  [selectUserReducer],
  user => user.errorMessage
);
