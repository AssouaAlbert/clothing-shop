import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';
import './cart-icon.style.scss';
import {connect} from 'react-redux';
import {toggleCartAction} from '../../redux/cart/cart.action';

const CartIcon = ({toggleCartAction}) => {
    return ( <div className='cart-icon' onClick={toggleCartAction}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
            </div>);
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartAction: () => {
            dispatch(toggleCartAction())
        }
    }
}
export default connect(null,mapDispatchToProps)(CartIcon);