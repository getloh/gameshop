import React from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { setCartVis } from '../web/webSlice';
import CartItem from './cartitem';

function CartInner({id}) {

    const state = useSelector(state => state);

    let divId = id || "noid"

    return (
        <div id={divId}>
            {state.web.cart.length === 0 ? <p>You cart is empty</p>: null}
                {state.web.cart.map(x => <CartItem 
                    key={x.inventory_id}
                    game_id={x.game_id}
                    title={x.title}
                    image={x.image}
                    platform={x.platform}
                    inventory_id={x.inventory_id}
                    price={x.price}
                    discount={x.discount}
                    quantity={x.quantity}
                />)}
                
        </div>

  );
}

export default CartInner;