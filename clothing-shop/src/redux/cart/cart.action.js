import userActions from '../user-actions.redux';
export const toggleCartAction = () => ({
    type: userActions.TOGGLE_CART_HIDDEN
})
export const addItem = (item) => ({
    type: userActions.ADD_ITEM,
    payload: item
})