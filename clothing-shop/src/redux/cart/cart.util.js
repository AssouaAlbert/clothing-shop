export const addItemToCart = (cart, addItem) => {
    const existingItem = cart.find((item)=> item.id == addItem.id); //If the item is in the cart return true
    if (existingItem) {
        return cart.map(item => item.id == addItem.id? {...item,quantity: item.quantity + 1}:item)
    }
    return [...cart, { ...addItem, quantity: 1}]
}