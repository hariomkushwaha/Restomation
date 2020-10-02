import React from 'react';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Logo from '../../assets/food-serving.svg';

import './header.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({hidden})=>(
    <div className='header '>
        <div className='logo-container'>
            <img className="logo" alt="" src={Logo} />
            <span className="brand">Asia's Kitchen</span>
        </div>
    <div className='options'>
    <Link className='option' to='/'>
    Home
    </Link>
    <Link className='option' to='/menu'>
    Menu
    </Link>
    <Link className='option' to='/menu'>
    Contact
    </Link>
    <CartIcon/>
    </div>
    {
        hidden ? null :
        <CartDropdown/>
    }
    </div>
);


const mapStateToProps = ({cart: {hidden}})=>({
hidden
});


export default connect(mapStateToProps)(Header);