import userActions from '../user-actions.redux';
export const toggleCartAction = () => ({
    type: userActions.TOGGLE_CART_HIDDEN
})
export const addItem = (item) => ({
    type: userActions.ADD_ITEM,
    payload: item
})
export const removeItem = (item) => ({
    type: userActions.REMOVE_ITEM,
    payload: item
})
export const reduceItem = (item) => ({
    type: userActions.REDUCE_ITEM,
    payload: item
})