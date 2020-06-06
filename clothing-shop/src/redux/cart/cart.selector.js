import {createSelector} from 'reselect';

//const selectCart = store => store.toogleCart; //There is the item found in the states
const selectCart = state => state.toogleCart; //There is the item found in the states

export const selectCartItems = createSelector( //This function takes two arguements
    [selectCart], //The first arguement is an arrau of selestors
    cart => cart.cart  //A function that will return a value out of the selector
)

export const selectItemsCount = createSelector(
    [selectCartItems], //cartItems: This is the value returned from the 
    cart => cart.reduce((acc,item)=>{
        return acc + item.quantity
    },0)
)