import React from 'react'
import './checkout-item.style.scss';


const CheckoutItem = ({item:{imageUrl,price,name,quantity}}) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} className=""/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <span className="remove-button">&#10005;</span>
        </div>
    );
}

export default CheckoutItem;