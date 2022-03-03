import React from 'react';
import {Link} from 'react-router-dom'
import { store } from '../../app/store';
import {useDispatch} from 'react-redux';
import { removeFromCart } from '../web/webSlice';

function CartItem({game_id, title, image, platform, inventory_id, quantity, price, discount}) {

    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeFromCart(inventory_id));
        let cart = store.getState().web.cart;
        localStorage.setItem("cart", JSON.stringify(cart));
    }


    return (

        <div id="cart-item">
            <div id="cart-item-left">
                <img src={image} alt={title} />
                <Link to={`/shop/games/${inventory_id}`}><h3>{title}</h3></Link>
                <h4>{platform}</h4>
            </div>
        
            <div id="cart-item-right">
                <h4 >x{quantity}</h4>
                {discount !== null ? <h4 style={{color: "blue"}}>£{(price - price*(discount/100)).toFixed(2)}*</h4> : <h4 >£{price}</h4>}
                <button onClick={handleRemove}>Remove</button>
            </div>
        
        </div>    
        

  );
}

export default CartItem;