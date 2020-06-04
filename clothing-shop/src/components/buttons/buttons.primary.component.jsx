import React from 'react';
import './buttons.primary.style.scss';
const ButtonPrimary = ({children, isGoogleSignIn,...otherProps}) => {
    return ( <button className={`${isGoogleSignIn? 'google-sign-in': '' } custom-button`} {...otherProps}>
        {children}
    </button> );
}
 
export default ButtonPrimary;