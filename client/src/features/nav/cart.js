import React from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { setCartVis } from '../web/webSlice';
import CartInner from './cartinner';

function Cart() {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleClose = () => {
        dispatch(setCartVis(false))
    }

    const goCheckout = () => {
        dispatch(setCartVis(false));
        navigate(`/checkout`);
    }

    return (
        <div id="cart">
            <div id="cart-top">
            <h1>My Cart</h1>
            <button onClick={handleClose}> X </button>
            </div>
            <CartInner id="cart-main"></CartInner>
            <div id="cart-bottom">
            {state.web.cart.length !== 0 ? <p>Total £{state.web.cart.map(x =>(Number(x.price) - (Number(x.price)*(Number(x.discount)/100)) )* Number(x.quantity)).reduce((x,y)=> x + y).toFixed(2)}</p> : null}

            <button onClick={goCheckout}>Checkout </button>
            </div>



        </div>
  );
}

export default Cart;