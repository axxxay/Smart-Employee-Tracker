import {Link} from 'react-router-dom';
import Cookies from 'js-cookie'
import {memo} from 'react';
import './index.css';

const NavBar = ({onClickLogout}) => {
    const jwtToken = Cookies.get('jwt_token')
    
    return (
        <nav className='navbar'>
            <Link to="/" className='link'>
                <p className='website-logo'>Logo</p>
            </Link>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link to="/" className='link'>
                        <p className='item-name'>Home</p>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/about" className='link'>
                        <p className='item-name'>About</p>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/contact" className='link'>
                        <p className='item-name'>Contact</p>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/auth/user" className='link'>
                        <button type='button' className='home-login-button' onClick={onClickLogout}>{jwtToken === undefined ? 'Login/SignUp' : 'Logout'}</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default memo(NavBar);