import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../buttons/buttons.primary.component';
import { connect } from 'react-redux'
import CartItem from '../cart/cart.component';
import {selectCartItems} from '../../redux/cart/cart.selector';
import './cart-dropdown.style.scss';
import {toggleCartAction} from '../../redux/cart/cart.action';
const Cart = ({cartItems,toggleCartAction, history}) => {
    return ( <div className="cart-dropdown">
        <div className='cart-items'>
            {   
                cartItems.length?
                (cartItems.map((item) => <CartItem item={item} key={item.id}/>))
                :<h2 style={{
                    textAlign: 'center'
                }}>Your Cart Is Empty</h2>
            }
        </div>
        <CustomButton className='custom-button' onClick= {() => {
            toggleCartAction();
            return (history.push(`/checkout`))}
            }>Checkout</CustomButton>
    </div> );
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartAction: () => {
            dispatch(toggleCartAction())
        }
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
}};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Cart));