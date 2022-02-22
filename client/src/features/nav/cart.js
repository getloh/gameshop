import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { setCartVis } from '../web/webSlice';
import CartItem from './cartitem';

function Cart() {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setCartVis(false))
    }

    return (
        <div id="cart">
            <div id="cart-top">
            <h1>My Cart</h1>
            <button onClick={handleClose}> X </button>
            </div>
            <div id="cart-main">
                {state.web.cart.map(x => <CartItem 
                    key={x.inventory_id}
                    game_id={x.game_id}
                    title={x.title}
                    image={x.image}
                    platform={x.platform}
                    inventory_id={x.inventory_id}
                    price={x.price}
                    discount={x.discount}
                />)}
            </div>
            <div id="cart-bottom"></div>



        </div>
  );
}

export default Cart;