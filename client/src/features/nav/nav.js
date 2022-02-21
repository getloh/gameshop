import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

function Nav() {
const state = useSelector(state => state);

  return (
    <div id="nav">
        <div id="navleft">
            <ul>
                <Link to='/'> <li>Home</li> </Link>
                <Link to='/shop'> <li>Shop</li> </Link>
                <Link to='/info'> <li>Info</li> </Link>
            </ul>
        </div>
        <div id="navright">
            <button id="cart-button">{state.web.cart.length > 0 ? `Cart: ${state.web.cart.length}` : "Empty Cart"}</button>
            {state.user.userinfo.user_id !== -1 ?  <Link to='/userdash'><button id="login-button">Hi, {state.user.userinfo.firstname}</button></Link> : <Link to='/login'><button id="login-button">Login</button></Link>}
        </div>
    </div>

  );
}

export default Nav;