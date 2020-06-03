import React from 'react';
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assests/crown-logo.svg'
import './header.style.scss';
const Header = () => {
    return ( <div className="header">
        <Link to='/' className='logo-container' ><Logo className='logo'/></Link>
        <div className='options'>
            <Link to='/' className='option'>Home</Link>
            <Link to='/shop' className='option'>Shop</Link>
            <Link to='/contact' className='option'>Contact</Link>
            <Link to='/signin' className='option'>Sign in</Link>
        </div>
    </div> );
}
 
export default Header;