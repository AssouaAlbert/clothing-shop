import React from 'react'
import './sign-in.style.scss';
import {signInWithGoogle} from '../../firebase/firebase.util';
import FormInputField from '../form/form-input.component';
import ButtonPrimary from '../buttons/buttons.primary.component';
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({email:'',password:''})
    }
    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name] : value});
    }
    render() {
        return ( <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInputField                 
                handleChange= {this.handleChange}
                type="email"
                name="email"
                value={this.state.email}
                id="email"
                label="Email"
                required/>
                <FormInputField                 
                handleChange= {this.handleChange}
                type="password"
                name="password"
                value={this.state.password}
                id="password"
                label="Password"
                required/>
                <div className="buttons">
                <ButtonPrimary type='submit' value='Submit Form'>
                    <span>Sign In</span>
                    </ButtonPrimary>
                <ButtonPrimary isGoogleSignIn={true}  onClick={signInWithGoogle} value='Submit Form'>
                    <span>Sign In With Google Account</span>
                    </ButtonPrimary>
                </div>
            </form>
        </div> );
    }
}

export default SignIn;
