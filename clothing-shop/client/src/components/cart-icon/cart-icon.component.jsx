import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';
import './cart-icon.style.scss';
import {connect} from 'react-redux';
import {selectItemsCount} from '../../redux/cart/cart.selector';
import {toggleCartAction} from '../../redux/cart/cart.action';

const CartIcon = ({toggleCartAction, itemsInCart}) => {
    return ( <div className='cart-icon' onClick={toggleCartAction}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemsInCart}</span>
            </div>);
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
        itemsInCart: selectItemsCount(state)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);