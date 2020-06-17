import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.style';

const WithSpinner = (WrappedComponent) => {
    const Spinner = ({isloading, ...otherProperties}) => {
    return isloading? 
    (<SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>)  
    : (<WrappedComponent {...otherProperties}/>)
    }
    return Spinner;
}

export default WithSpinner;