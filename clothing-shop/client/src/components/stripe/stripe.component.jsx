import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({total}) => {
    const priceForStripe = total * 100; //Strip uses the basic units of the dollar by default 
    const publishableKey = 'pk_test_FXGfo0yjuaoJ4vV5i2txzj6y';
    const onToken = (token) => {
        axios({
            /**
             * ? Indicates the url we want to fetch.
             * * pament here is ewuivalent to './payment'
             */
            url: 'payment',
            method: 'post', //* They typeof request
            data: {
                amount: priceForStripe,
                token: token
            }
        })
        .then(response => {
            alert('Payment Successful');
        })
        .catch(error => {
            console.log('Payment Error: ', error);
            alert('Therewas an issue with your paument, PLese use the provided credit card');
        })
    }
    return (
        <div className="">
            <StripeCheckOut
            label="Pay Now"
            name="Clothing Shop Ltd"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your Total is $${total}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
            />
        </div>
    )
}

export default StripeCheckoutButton;