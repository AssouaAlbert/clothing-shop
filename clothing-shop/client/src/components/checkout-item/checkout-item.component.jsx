import React from 'react'
import './checkout-item.style.scss';
import {connect} from 'react-redux';
import {removeItem, addItem, reduceItem} from '../../redux/cart/cart.action';

const CheckoutItem = ({item, clearItem, addItem,reduceItem}) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={item.imageUrl} alt={item.name} className=""/>
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => reduceItem(item)}>&#10094;</div>
                <span className='value'>{item.quantity}</span>
                <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
            </span>
            <span className="price">{item.price}</span>
            <span className="remove-button" onClick={() => clearItem(item)}>&#10005;</span>
        </div>
    );
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clearItem: (item) => { dispatch(removeItem(item))},
        addItem: (item) => {dispatch(addItem(item))},
        reduceItem: (item) => {dispatch(reduceItem(item))}
    }
}
export default connect(null,mapDispatchToProps)(CheckoutItem);