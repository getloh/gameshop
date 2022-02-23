import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams, useNavigate} from 'react-router-dom'
import { store } from '../app/store';
import { db } from '../features/api/api';
import { addToCart, removeFromCart, setStatus } from '../features/web/webSlice';



function Itempage(props) {
    let urlParam = useParams(); // gets game_id from the URL
    let inv_id = urlParam.inventory_id;
    let state = useSelector(state => state.web)
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    
    useEffect( () => {  // Grabs item data on pageload
        db.getSingleInventoryData(inv_id);
        return () => {};
    }, []);


    const goBack = () => {  // For the Back button
        navigate('/shop')
    }

    const handleCartAdd = () => {
        const quant = document.getElementById('quantity').value;
        let newQuant = null;
        let preExist = state.cart.find(x => x.inventory_id === state.game.inventory_id)
        if (preExist){
            console.log("duplicate found")
           newQuant = Number(preExist.quantity) + Number(quant);
           dispatch(removeFromCart(state.game.inventory_id));
        }

        const cartItem = {
            inventory_id: state.game.inventory_id,
            quantity: newQuant || quant,
            title: state.game.title,
            platform: state.game.platform,
            price: state.game.price,
            discount: state.game.discount,
            image: state.game.image,
            game_id: state.game.game_id
        }
        
        if (newQuant > state.game.stock || quant > state.game.stock) {
            dispatch(setStatus("Unable to add to cart - Insufficient Stock"));
            return;
        }


        dispatch(addToCart(cartItem));
        let cart = store.getState().web.cart;
        localStorage.setItem("cart", JSON.stringify(cart));
        dispatch(setStatus("Added to Cart!"));
    }


    return (
    
    <div id="itempage">
        <button id="item-backbutton" onClick={goBack}>Back</button>
        <h1>{state.game.title}</h1>

        <div className="item-upper">
            <img src={state.game.image} alt="" />

            <div className="item-upper-right">
                <div className="item-purchase urbox">
                    <button onClick={handleCartAdd} >Add to cart</button>
                    <label htmlFor="quantity">Quantity</label>
                    <input id="quantity" defaultValue="1" type="number" placeholder='quantity' />
                    <p>Stock: {state.game.stock} </p>
                    <p>Price: £{state.game.price} </p>
                    <p>Platform: {state.game.platform}</p>
                </div>
                <div className="item-rating urbox">
                    <div className="item-rating-inner">Rating: {state.game.rating}</div>
                    <p>Votes: {state.game.votes}</p>
                </div>
            </div>
        </div>

        <section className="item-lower">
            <p>{state.game.info}</p>
        </section>
    </div>

  );
}

export default Itempage;
