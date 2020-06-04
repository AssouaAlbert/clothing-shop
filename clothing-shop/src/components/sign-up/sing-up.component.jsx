import React from 'react'
import FormInput from '../form/form-input.component';
import Button from '../buttons/buttons.primary.component';
import './sign-up.style.scss';
import {auth, createUserProfileDocument} from '../../firebase/firebase.util';
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
        const {displayName, email, password, confirmpassword} = this.state;
        if(password !== confirmpassword ) alert('Password and Confirm Password do notmatch');
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password); //This will return thr user created by email and password
            //Add the user to the database
            await createUserProfileDocument(user, {displayName}); //Remember that the otherinformation is used here
        }
        catch (error) {
                console.log(error);
        }
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
        })
    }
    render() {
        const {displayName, email, password, confirmpassword} = this.state;
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
 export default SignUp;