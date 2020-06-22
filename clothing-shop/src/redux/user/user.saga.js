import { takeLatest,
            put,
            all,
            call } from 'redux-saga/effects';

import UserActions from '../user-actions.types';
import {SigninSuccess, 
        SinginFailure,
        signOutFailure,
        signOutSuccess} from '../../redux/user/user-action';
        
import {googleProvider,
        createUserProfileDocument,
        auth,
        getCurrentUser
    } from '../../firebase/firebase.util';

export function* getSnapShotFromUserAuth(user) {
    try {
        const userRef = yield call (createUserProfileDocument, user);
        const userSnapShot = yield userRef.get();
        yield put(
            SigninSuccess({id: userSnapShot.id, ...userSnapShot.data()})
        )
    } catch (error) {
        yield put(SinginFailure(error));
    }
}
export function* signInEmailAndPassword ({payload:{email, password}}) { //! sagas  props are the actions
    try {
        const {user} = yield auth.signInEmailAndPassword(email,password);
        yield getSnapShotFromUserAuth(user);
    } catch(error) {
        yield SinginFailure(error);
    }
}
export function* signInGoogle () {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider); //The user is the respinds from every signIn
        yield getSnapShotFromUserAuth(user);
    }
    catch(error){
        yield put(SinginFailure(error))
    }
}
export function* onGoogleSignInStart () {
    yield takeLatest(
        UserActions.GOOGLE_SIGN_IN_START,
        signInGoogle
    )
}
export function* onEmailSignInStart () {
    yield takeLatest(
        UserActions.EMAIL_SIGN_IN_START,
        signInEmailAndPassword
    )
}
export function* isUserAuthenticated () {
    try {
        const userAuth = getCurrentUser();
        userAuth.then((user) => {
            if (!user) return;
            getSnapShotFromUserAuth(user);
        });
    }
    catch(e) {
        yield put(SinginFailure(e))
    }
}
export function* signOut () {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error))
    }
}
export function* onSignOutStart () {
    yield takeLatest(
        UserActions.SIGN_OUT_START,
        signOut
    )
}
export function* onCheckUserSession () {
    yield takeLatest(
        UserActions.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}
function* rootUserSaga () {
    yield all([ //!These are called listeners.
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),

    ])
}

export default rootUserSaga;