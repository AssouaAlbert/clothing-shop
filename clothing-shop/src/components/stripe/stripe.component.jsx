import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const onToken = (token) => {
    alert("Payment Succcessful");
}
const StripeCheckoutButton = ({total}) => {
    const priceForStripe = total * 100; //Strip uses the basic units of the dollar by default 
    const publishableKey = 'pk_test_FXGfo0yjuaoJ4vV5i2txzj6y';
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