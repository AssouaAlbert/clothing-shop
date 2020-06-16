import React from 'react';
import './buttons.primary.style.scss';
import {ButtonContainer} from './button.styles'
const ButtonPrimary = ({children,...otherProps}) => {
    return ( <ButtonContainer {...otherProps}>
        {children}
    </ButtonContainer> );
}

export default ButtonPrimary;
