import { takeLatest,
    put,
    all,
    call } from 'redux-saga/effects';

import UserActionTypes from '../user-actions.types';
import {clearCart} from '../cart/cart.action';

export function* clearCartOnSignOut () {
    try {
        yield put(clearCart());
    }
    catch(error) {
        console.log(error);
    }
}
export function* onSignOutSuccess () {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS,
        clearCartOnSignOut
        )
} 
export default function* rootCartSaga() {
    yield all([
        call(onSignOutSuccess),
    ]);
}