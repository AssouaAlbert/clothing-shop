import React from 'react';
//Connect is a higher order function 
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assests/crown-logo.svg';
//?Because Everything Has been moved to the Saga this is not needed
//import {auth} from '../../firebase/firebase.util';

import {getUser,toggleCart} from '../../redux/user/user.selector';
import {signOutStart} from '../../redux/user/user-action';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// import './header.style.scss';
import {HeaderContainer, OptionLinkContainer, OptionSpanContainer,OptionsContainer, LogoContainter} from './header.styles';
const Header = ({currentUser, hidden, signOutStart}) => {
    return ( <HeaderContainer>
        <LogoContainter to='/'><Logo className='logo'/></LogoContainter>
        <OptionsContainer>
            <OptionLinkContainer to='/' >Home</OptionLinkContainer>
            <OptionLinkContainer to='/shop' >Shop</OptionLinkContainer>
            <OptionLinkContainer to='/contact' >Contact</OptionLinkContainer>
            {
                currentUser ?
                <OptionSpanContainer  onClick={() => signOutStart()}>Sign Out</OptionSpanContainer>
                :<OptionLinkContainer to='/signin' >Sign in</OptionLinkContainer>

            }
                <CartIcon/>
        </OptionsContainer>
        {
            hidden? null
            :<CartDropdown/>
        }
    </HeaderContainer> );
}

// export default connect(mapStateToProps, mapDispatchToProps)(containerName)
/**
 * Conects takes two arguements; the second is optional
 * The first is the function which with helps us access the state
 */
//State can be any name because it is a ball back functio, whose values are parsed by the connect function
// const mapStateToProps = (store) => {
// const mapStateToProps = ({user: {currentUser}, togleCart: {hidden}}) => {
const mapStateToProps = (store) => {
    return {
    currentUser: getUser(store),
    hidden: toggleCart(store)
}};
//Connect is used to connect to the store and any changes will be updated

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signOutStart: () => {
            dispatch(signOutStart());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);