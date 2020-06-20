import {all, call} from 'redux-saga/effects'
//Import these sagas
import {
    fetchCollectionsStart
} from './shop/shop.sagas'
import rootUserSaga, {
    onGoogleSignInStart
} from './user/user.saga'
export default function* rootSaga() {
    yield all([
        //!This is the same as writing 
        //* fetchCollectionsStart(); Call is used to call the fruntion;
        call(fetchCollectionsStart),
        call(rootUserSaga)
    ]);
}