import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import CartInner from '../features/nav/cartinner';

function Checkout() {

  const state = useSelector(state => state)
  const navigate = useNavigate();

  const goPay = () => {
    navigate(`/checkout/pay`);
}

  return (
    <div>
        <h1>Checkout</h1>
        <section id="checkout">

        <CartInner id="checkout-main"/>
            <div id="cart-bottom">
            {state.web.cart.length !== 0 ? <p>Total £{state.web.cart.map(x =>(Number(x.price) - (Number(x.price)*(Number(x.discount)/100)) )* Number(x.quantity)).reduce((x,y)=> x + y).toFixed(2)}</p>: null}
            </div>

            <button id="paybutton" onClick={goPay}>Proceed to Payment</button>
        </section>

    </div>

  );
}

export default Checkout;
