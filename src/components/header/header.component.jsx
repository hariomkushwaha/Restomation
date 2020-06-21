import React from 'react';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import './header.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({hidden})=>(
    <div className='header '>
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