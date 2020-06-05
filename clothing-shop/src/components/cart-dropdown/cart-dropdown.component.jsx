import React from 'react';
import CustomButton from '../buttons/buttons.primary.component';
import './cart-dropdown.style.scss';
const Cart = () => {
    return ( <div className="cart-dropdown">
        <div className='cart-item'/>
        <CustomButton className='custom-button'> Checkout </CustomButton>
    </div> );
}
export default Cart;