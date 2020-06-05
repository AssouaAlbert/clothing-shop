import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.util';
//Connect is a higher order function 
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assests/crown-logo.svg';
import './header.style.scss';
const Header = ({currentUser}) => {
    return ( <div className="header">
        <Link to='/' className='logo-container' ><Logo className='logo'/></Link>
        <div className='options'>
            <Link to='/' className='option'>Home</Link>
            <Link to='/shop' className='option'>Shop</Link>
            <Link to='/contact' className='option'>Contact</Link>
            {
                currentUser ?
                <span className='option' onClick={() => auth.signOut()}>Sign Out</span>
                :<Link to='/signin' className='option'>Sign in</Link>

            }
        </div>
    </div> );
}

// export default connect(mapStateToProps, mapDispatchToProps)(containerName)
/**
 * Conects takes two arguements; the second is optional
 * The first is the function which with helps us access the state
 */
//State can be any name because it is a ball back functio, whose values are parsed by the connect function
const mapStateToProps = (store) => {
    return {
    currentUser: store.user.currentUser
}};
//Connect is used to connect to the store and any changes will be updated
export default connect(mapStateToProps)(Header);