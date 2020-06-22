import userAction from '../user-actions.types';
import {addItemToCart, removeItemFromCart, reduceItemFromCart} from './cart.util';
const INITIAL_STATE = {
    hidden: true,
    cart: []
}
const cartReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case userAction.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case userAction.ADD_ITEM:
            return {
                ...state,
                cart: addItemToCart (state.cart, action.payload)
            }
        case userAction.REMOVE_ITEM:
            return {
                ...state,
                cart: removeItemFromCart (state.cart, action.payload)
            }
        case userAction.REDUCE_ITEM:
            return {
                ...state,
                cart: reduceItemFromCart (state.cart, action.payload)
            }
        case userAction.CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        default:
            return state;
    }
}

export default cartReducer;