import SHOP_ACTIONS from './shop-actions.types';
const INITIAL_STATE = {
    shopData : null,
    isLoading: true,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state =INITIAL_STATE, action) =>{
    switch (action.type) {
        case (SHOP_ACTIONS.FETCH_COLLECTION_START):
            return {
                ...state,
                isFetching: true
            }
        case(SHOP_ACTIONS.FETCH_COLLECTION_SUCCESS):
            return {
                ...state,
                shopData: action.payload,
                isFetching: false,
                isLoading: false
            }
        case(SHOP_ACTIONS.FETCH_COLLECTION_FAILURE):
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false,
            }
        default:
            return state;
    }
}

export default shopReducer;