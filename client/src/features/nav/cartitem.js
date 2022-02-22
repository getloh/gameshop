import React from 'react';
import {Link} from 'react-router-dom'
import { store } from '../../app/store';
import {useSelector, useDispatch} from 'react-redux';
import { removeFromCart } from '../web/webSlice';

function CartItem({game_id, title, image, platform, inventory_id, quantity, price, discount}) {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeFromCart(inventory_id));
        let cart = store.getState().web.cart;
        localStorage.setItem("cart", JSON.stringify(cart));
    }


    return (

        
        <div>
        <Link to={`/shop/games/${inventory_id}`}>{inventory_id}{title}</Link>
        
        <button onClick={handleRemove}>Remove From Cart</button>
        </div>    
        

  );
}

export default CartItem;