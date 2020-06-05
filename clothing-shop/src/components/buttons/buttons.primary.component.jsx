import React from 'react';
import './buttons.primary.style.scss';
const ButtonPrimary = ({children, isGoogleSignIn,inverted,...otherProps}) => {
    return ( <button className={`${inverted? 'inverted':''}${isGoogleSignIn? 'google-sign-in': '' } custom-button`} {...otherProps}>
        {children}
    </button> );
}
 
export default ButtonPrimary;