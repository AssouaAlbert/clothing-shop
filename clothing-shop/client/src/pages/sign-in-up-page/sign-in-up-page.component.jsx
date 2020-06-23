import React from 'react';
import './sign-in-up-page.style.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sing-up.component';
const SingInUpPage = () => {
    return ( <div className='sign-in-page'>
        <SignIn />
        <SignUp />
    </div> );
}
 
export default SingInUpPage;