import { all, call } from 'redux-saga/effects';

import {
    isUserAuthenticated,
    userSagas
} from './user/user.saga';

export function* rootSaga() {
    yield all([
        call(isUserAuthenticated),
        call(userSagas)
    ]);
}
