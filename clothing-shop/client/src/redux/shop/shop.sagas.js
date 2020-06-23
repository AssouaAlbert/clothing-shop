//!!Note that effects are controlled by the redux saga. Example is using delay and takelatest
//? Delay is similar to setTimeout funtion in javascript
//? the Redux saga can start and stop and action if neccessary; delay is controlled by the saga and can be stopped when used with takeLatest 
//TODO Read about redux saga effects delay and take Latest
//*Effects are use to do diff things with the store like creating or listening to action
//!! takeEvery it listen for every action of a specific type that we use.
//?TakeEvery createa a non-blocking call


import {    
            takeLatest,
            call, //*This is a method is used to defer control back top the sage middleware
            put //*Unlike the dispatch used in the thunk middle ware put is used by saga generators to create dispatch
        } from "redux-saga/effects";
import {    
            fetCollectionSuccess,
            fetchCollectionsError
        } from './shop-action';

import {    
            firestore,
            convertSnapShopToObject
    } from '../../firebase/firebase.util';

import ShopActionTypes from './shop-actions.types';

export function* fetchCollectionsStartAsync() {
    try {    
        const collectionRef = firestore.collection(`collections`);
        //Generators run the yeild until the next yield  https://medium.com/front-end-weekly/modern-javascript-and-asynchronous-programming-generators-yield-vs-async-await-550275cbe433#:~:text=Generators%20can%20be%20used%20for,await%20syntax%20is%20built%20on.
        const snapShot = yield collectionRef.get(); 
        const collectionMaps = yield call(convertSnapShopToObject, snapShot); //The snapshot is pasrsed as an arguement to the converShapShop... Method
        yield put(fetCollectionSuccess(collectionMaps))

        //* Move from the shop.actions.js fil. This is because we will like to use redux saga and there thunk is no more required.
        // return (dispatch) => {
        //     const collectionRef = firestore.collection(`collections`);
        //     dispatch(fetchCollectionsStart());
        //     collectionRef.get().then( async snapShot => {
        //             const collectionMaps = await convertSnapShopToObject(snapShot);
        //             dispatch(fetCollectionSuccess(collectionMaps));
        //     }).catch(error => dispatch(fetchCollectionsError(error.message)));
        // }
    }
    catch(error) {
        yield put(fetchCollectionsError(error.message));
    }
}

export function* fetchCollectionsStart() {
    //For the takeEvery function it takes two parameter, the first one is the action the rest can be other functions to fire in a chronological manner (I think)
    //!!yield takeEvery( //This code was move to tke Latest because the take latest first the last known action
    //*That is if the action was triggered multiple times the action will fired just the last
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START, //Listen for this action type and fire the fetchColliectionAsync 
        fetchCollectionsStartAsync
        )    
}