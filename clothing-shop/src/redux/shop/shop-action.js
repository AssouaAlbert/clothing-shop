import shopActions from './shop-actions.types';
import {firestore, convertSnapShopToObject} from '../../firebase/firebase.util';

export const fetchCollectionsStart  = () => ({
    type: shopActions.FETCH_COLLECTION_START
})

export const fetCollectionSuccess = (collections) => ({
    type: shopActions.FETCH_COLLECTION_SUCCESS,
    payload: collections
})

export const fetchCollectionsError = (error) => ({
    type: shopActions.FETCH_COLLECTION_FAILURE,
    payload: error
}) 

export const fetchCollectionsStartAsync = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection(`collections`);
        dispatch(fetchCollectionsStart());
        collectionRef.get().then( async snapShot => {
                const collectionMaps = await convertSnapShopToObject(snapShot);
                dispatch(fetCollectionSuccess(collectionMaps));
        }).catch(error => dispatch(fetchCollectionsError(error.message)));
    }
}