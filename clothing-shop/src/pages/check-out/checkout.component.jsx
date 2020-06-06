import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectcartTotal} from '../../redux/cart/cart.selector';
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
            items.map(item => item.name)
        }
        <div className="total"><span>Total:	&nbsp;${total}</span></div>
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