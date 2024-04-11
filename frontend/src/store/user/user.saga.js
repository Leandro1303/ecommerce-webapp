import { takeLatest, put, all, call } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';

import {
  setCurrentUser,
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed
} from './user.action.js';

import {
  createAuthUserWithEmailAndPassword,
  getCurrentUser,
  signInWithEmailAndPassword,
  signOutUSer,
} from '../../utils/MongoDB/mongo.utils.js';
import setAuthToken from '../../utils/Auth/Auth.utils.js';

export function* isUserAuthenticated() { //FROM HERE
  try {
    const userAuth = yield call(getCurrentUser);

    if (!userAuth) return;
    yield put(setCurrentUser(userAuth));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* checkUserSession() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;

    const userSnapshot = yield call(getCurrentUser, userAuth);
    yield put(setCurrentUser(userSnapshot));
  } catch (error) {
    console.error('Error al verificar la sesión del usuario:', error);
  }
} // TO HERE

export function* signUpUser({ payload: { email, password, name } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password,
      name
    );
    yield put(signUpSuccess(user), { name });
    yield put(signInAfterSignUpHandler({ email, password }));
  } catch (error) {
    yield put(signUpFailed(error.message));
  }
}

export function* signInAfterSignUpHandler({ payload: credentials }) {
  yield signInWithEmail({ payload: credentials });
}

export function* signInWithEmail({ payload: credentials }) {
  try {
    // Lógica para iniciar sesión con correo y contraseña
    const user = yield call(signInWithEmailAndPassword, credentials);
    setAuthToken(user.token);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailed(error.message));
  }
}

export function* signOut() {
  try {
    // Lógica para cerrar sesión
    yield call(signOutUSer);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error.message));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, checkUserSession);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpUser);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUpHandler);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onEmailSignInStart),
    call(onSignOutStart),
  ]);
}
