import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import CartItem from '../features/nav/cartitem';
import { useEffect } from 'react';
import { db } from '../features/api/api';
import Cart from '../features/nav/cart';
import CartInner from '../features/nav/cartinner';
import { setCart } from '../features/web/webSlice';



function PaymentMain() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy +'-'+ mm +'-'+ dd;

    const handlePay = () => {
        const cart = state.web.cart;    // Array of cart items
        const userinfo = state.user.userinfo;
        const order = {cart, userinfo};

        db.postOrder(order)
        dispatch(setCart([]));
    }

    return (
      
        <div id="payment">
            <div id="payment-main">
                <CartInner id="payment-cart"/>
                
                <div id="deliveryinfo">
                <h3>Payment and delivery information</h3>
                    <p>{state.user.userinfo.firstname} {state.user.userinfo.lastname}
                    <br />{state.user.userinfo.email}
                    <br />{state.user.userinfo.address}
                    <br />{state.user.userinfo.postcode}</p>
                    <br />
                    {/* <p style={{fontWeight: "bold"}}>Total £{state.web.cart.map(x =>(Number(x.price) - (Number(x.price)*(Number(x.discount)/100)) )* Number(x.quantity)).reduce((x,y)=> x + y).toFixed(2)}</p> */}

                </div>
            </div>
            <section id="payment-lower">
                This is where the payment stuff would go, <br />
                This site was made by just myself as a portfolio project in a relatively short span of time <br />
                and so for obvious reasons there i'm not looking to put any sort of actual transaction or payment system in place. <br />
                This is out of security concerns and because that seems like a whole other bucket of worms that i'm not ready to open right now. <br /><br />
                That said, you can click the button below to complete your order.
            </section>
            <section style={{backgroundColor: "rgb(204, 86, 90)"}} id="payment-lower">
                By clicking below you acknowledge that this website is pure fiction and that you understand there are no actual products for sale here, nothing will be dispatched or delivered.
            </section>

            <button id="paybutton" onClick={handlePay}>Pay</button>
            <br />
        </div>
    )
}

function CheckCart() {
  const state = useSelector(state => state);

  return (
    <div>
  {state.web.cart.length > 0 ? <PaymentMain/> : <h2 style={{marginTop: "10vh"}} className="center">Your cart is empty! <br/> Go pick a cool game to buy</h2>}
  </div>
  )
}

function Payment() {

  const state = useSelector(state => state)
  const navigate = useNavigate();

  useEffect(()=> {    // Grabs user ID from cookie if it exists
    const cookies = document.cookie;
    if (cookies){
      let userId = cookies
        .split('; ')
        .find(row => row.startsWith('user_id='))
        .split('=')[1];
      db.getUserData(userId);
    }
  }, [])

  return (
    <div>
        <h1>Order confirmation and payment</h1>
        <section id="payment" className="center">
        {state.user.userinfo.user_id !== -1 ? <CheckCart /> : <Link to={'/login'}> <h2 className="center" style={{textDecoration: "underline", marginTop: "10vh"}}>Please Sign in to use this feature</h2></Link>}
        </section>
    </div>
  );
}

export default Payment;
