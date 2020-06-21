import React from 'react';
import { connect } from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden,itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
    <div className='item-count'>{itemCount}</div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});


const mapStateToprops = (state)=>({
  itemCount:selectCartItemsCount(state)
})

export default connect(
  mapStateToprops,
  mapDispatchToProps
)(CartIcon);