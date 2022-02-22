import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { setCart, setCartVis, setStatus } from '../web/webSlice';
import Cart from './cart';

function Nav() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.web.cart == ""){
      console.log("Cart recovery is running");
      localStorage.getItem("cart");
        let cartData = JSON.parse(localStorage.getItem("cart"));
        if (cartData){
        dispatch(setCart(cartData));
      }
    }
    return () => {}
  }, [])

  useEffect(() => {
    if (state.web.status !== ""){
    console.log("useEffect is running")
    let removeStatus = setTimeout(()=>{dispatch(setStatus("")); console.log("useEffect timeout finished")}, 3500);
    return () => {clearTimeout(removeStatus)};}
  }, [state.web.status]);

  
  const toggleCartVis = () => {
    dispatch(setCartVis(!state.web.cartvis))
  }

  return (
    <div id="navpage">
    <div id="nav">
        <div id="navleft">
            <ul>
                <Link to='/'> <li>Home</li> </Link>
                <Link to='/shop'> <li>Shop</li> </Link>
                <Link to='/info'> <li>Info</li> </Link>
            </ul>
        </div>
        <div id="navright">
            <button id="cart-button" onClick={toggleCartVis}>{state.web.cart.length > 0 || state.web.cart.length == null ? `Cart: ${state.web.cart.length}` : "Empty Cart"}</button>
            {state.user.userinfo.user_id !== -1 ?  <Link to='/userdash'><button id="login-button">Hi, {state.user.userinfo.firstname}</button></Link> : <Link to='/login'><button id="login-button">Login</button></Link>}
        </div>


    </div>
            {state.web.cartvis === true ? <Cart/> : null}

            {state.web.status !== "" ? <div id="status">{state.web.status}</div> : null}

</div>
  );
}

export default Nav;