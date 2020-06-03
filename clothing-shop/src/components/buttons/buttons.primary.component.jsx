import React from 'react';
import './buttons.primary.style.scss';
const ButtonPrimary = ({children, ...otherProps}) => {
    return ( <button className="custom-button" {...otherProps}>
        {children}
    </button> );
}
 
export default ButtonPrimary;