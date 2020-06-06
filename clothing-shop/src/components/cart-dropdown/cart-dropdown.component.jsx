import React from 'react';
import CustomButton from '../buttons/buttons.primary.component';
import { connect } from 'react-redux'
import CartItem from '../cart/cart.component';
import {selectCartItems} from '../../redux/cart/cart.selector';
import './cart-dropdown.style.scss';
const Cart = ({cartItems}) => {
    return ( <div className="cart-dropdown">
        <div className='cart-items'>
            {   
                cartItems.map((item) => <CartItem item={item} key={item.id}/>)
            }
        </div>
        <CustomButton className='custom-button'> Checkout </CustomButton>
    </div> );
}
const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
}};
export default connect(mapStateToProps)(Cart);