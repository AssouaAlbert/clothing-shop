import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {selectCartItems, selectcartTotal} from '../../redux/cart/cart.selector';
import StripeCheckoutButton from '../../components/stripe/stripe.component';
import {Notice} from './checkout-notice';


import './checkout.style.scss';
const Checkout = ({items, total}) => {
    return ( <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span className="">Product</span>
            </div>
            <div className="header-block">
                <span className="">Description</span>
            </div>
            <div className="header-block">
                <span className="">Quantity</span>
            </div>
            <div className="header-block">
                <span className="">Price</span>
            </div>
            <div className="header-block">
                <span className="">Remove</span>
            </div>
        </div>
        {
            items.map(item => <CheckoutItem key={item.id} item={item}/>)
        }
        <Notice>
            <h3>* Please use the following information for payments *</h3>
            <p>4242&nbsp;4242&nbsp;4242&nbsp;4242&nbsp;-Exp:1/23&nbsp;CVV:&nbsp;123</p>
        </Notice>
        <div className="total"><span>Total:	&nbsp;${total}</span></div>
        <StripeCheckoutButton total={total}/>
    </div> );
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         dispatch1: () => {
//             dispatch(actionCreator)
//         }
//     }
// }
const mapStateToProps = createStructuredSelector({
        items: selectCartItems,
        total: selectcartTotal
})
export default connect(mapStateToProps,null)(Checkout);