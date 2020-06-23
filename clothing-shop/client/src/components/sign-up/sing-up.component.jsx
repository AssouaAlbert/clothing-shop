import React from 'react';
import { connect } from 'react-redux';

import {signUpStart} from '../../redux/user/user-action';

import FormInput from '../form/form-input.component';
import Button from '../buttons/buttons.primary.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.util';
import './sign-up.style.scss';
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name] : e.target.value});
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const {password, confirmpassword} = this.state;
        const {...userInfo} = this.state;
        if(password !== confirmpassword ) alert('Password and Confirm Password do notmatch');
        const {signUpStart} = this.props;
        signUpStart(userInfo);
        //! Move to the sagas
        // try{
        //     const {user} = await auth.createUserWithEmailAndPassword(email, password); //This will return thr user created by email and password
        //     //Add the user to the database
        //     await createUserProfileDocument(user, {displayName}); //Remember that the other information dateCreated and display Name are used here
        // }
        // catch (error) {
        //         console.log(error);
        // }
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
        })
    }
    render() {
        const {displayName, email, password, confirmpassword} = this.state;
        const {signUp} = this.props;
        return ( <div className="sign-up">
            <h2 className="title">I don't have an account</h2>
            <span>Sign Up with Email and Password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput name='displayName' type='text' value={displayName} onChange={this.handleChange} label='Display Name' required></FormInput>
                <FormInput name='email' type='email' value={email} onChange={this.handleChange} label='Email' required></FormInput>
                <FormInput name='password' type='password' value={password} onChange={this.handleChange} label='Password' required></FormInput>
                <FormInput name='confirmpassword' type='password' value={confirmpassword} onChange={this.handleChange} label='Confirm Password ' required></FormInput>
                <Button type='submit'>
                    Sign Up
                </Button>
            </form>
        </div> );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signUpStart: (userInfo) => {
            dispatch(signUpStart(userInfo))
        }
    }
}
export default connect(null, mapDispatchToProps)(SignUp);