import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {Link, useParams, useNavigate} from 'react-router-dom'
import { db } from '../features/api/api';



function Itempage(props) {
    let urlParam = useParams(); // gets game_id from the URL
    let game_id = urlParam.game_id;
    let state = useSelector(state => state.web.game)
    let navigate = useNavigate();

    
    useEffect( () => {
        db.getSingleGameData(game_id)
        return () => {};
    }, []);


    const goBack = () => {  // For the Back button
        navigate('/shop')
    }

    const handleCartAdd = () => {
        const quant = document.getElementById('quantity').value;
        
    }


    return (
    
    <div id="itempage">
        <button id="item-backbutton" onClick={goBack}>Back</button>
        <h1>{state.title}</h1>

        <div className="item-upper">
            <img src={state.image} alt="" />

            <div className="item-upper-right">
                <div className="item-purchase urbox">
                    <button onClick={handleCartAdd} >Add to cart</button>
                    <input id="quantity" defaultValue="1" type="number" placeholder='quantity' />
                </div>
                <div className="item-rating urbox">
                    <div className="item-rating-inner">Rating: {state.rating}</div>
                    <p>Votes: {state.votes}</p>
                </div>
            </div>
        </div>

        <section className="item-lower">
            <p>{state.info}</p>
        </section>
    </div>

  );
}

export default Itempage;
