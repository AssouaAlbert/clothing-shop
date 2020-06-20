import { takeLatest, 
            put, 
            all, 
            call } from 'redux-saga/effects';

import UserActions from '../user-actions.redux';
import { googleSigninSuccess, googleSinginFailure} from '../../redux/user/user-action';
import {googleProvider,signInWithGoogle, createUserProfileDocument, auth} from '../../firebase/firebase.util';

export function* signInGoogle () {
    try {
        const userAuth = yield auth.signInWithPopup(googleProvider); //The user is the respinds from every signIn
        const userRef = call(createUserProfileDocument, userAuth);
        const userSnapShot = yield userRef.get();
        yield put(
            googleSigninSuccess({id: userSnapShot.id, ...userSnapShot.data()});
        )
    }
    catch(e){
        yield put(googleSinginFailure(e))
    }
}

export function* onGoogleSignInStart () {
    yield takeLatest(
        UserActions.GOOGLE_SIGN_IN_START,
        signInGoogle
    )
}

function* rootUserSaga () {
    yield all([
        call(onGoogleSignInStart)
    ])
}

export default rootUserSaga;