import React from 'react'
import {auth, signInWithGoogle} from '../../firebase/firebase.util';
import {connect} from 'react-redux'

import FormInputField from '../form/form-input.component';
import ButtonPrimary from '../buttons/buttons.primary.component';
import {googleSignInStart} from '../../redux/user/user-action';


import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password: ''
        }
    }
    handleSubmit = async(e) => {
        e.preventDefault()
        const {email, password} = this.state;
        try {
        await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log('Error: ', error);
        }
        this.setState({email:'',password:''})
    }
    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name] : value});
    }

    render() {
        const {signInWithGoogle} = this.props;
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
                <ButtonPrimary
                    type='button'
                    isGoogleSignIn={true}
                    onClick={signInWithGoogle}
                    value='Submit Form'>
                    <span>Sign In With Google Account</span>
                    </ButtonPrimary>
                </div>
            </form>
        </div> );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signInWithGoogle: () => {
            dispatch(googleSignInStart())
        }
    }
}
export default connect(null,mapDispatchToProps)(SignIn);
