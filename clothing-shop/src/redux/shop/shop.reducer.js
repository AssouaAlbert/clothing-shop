import SHOP_ACTIONS from './shop-actions.types';
const INITIAL_STATE = {
    shopData : null
}

const shopReducer = (state =INITIAL_STATE, action) =>{
    switch (action.type) {
        case(SHOP_ACTIONS.UPDATE_COLLECTION):
            return {
                ...state,
                shopData: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;