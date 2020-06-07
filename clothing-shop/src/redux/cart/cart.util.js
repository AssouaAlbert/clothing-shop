export const addItemToCart = (cart, addItem) => {
    const existingItem = cart.find((item)=> item.id === addItem.id); //If the item is in the cart return true
    if (existingItem) {
        return cart.map(item => item.id === addItem.id? {...item,quantity: item.quantity + 1}:item)
    }
    return [...cart, { ...addItem, quantity: 1}]
}
export const removeItemFromCart = (cart, removeItem) => cart.filter(item => item.id !== removeItem.id) //Returns anything that is true  (If the id do not match return treu)

export const reduceItemFromCart = (cart, reduceItem) =>  {
    if(reduceItem.quantity==1) {
        return cart.filter(item => item.id !== reduceItem.id)
    }
    else {
        return cart.map(item => item.id === reduceItem.id? {...item, quantity: item.quantity - 1}:item);
    }
}