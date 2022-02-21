import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { db } from '../features/api/api';
import Shopitem from '../features/shop/Shopitem';

function Shop() {

    const state = useSelector(state => state.web);
    // Runs on pageload
    useEffect(() => {   // If the games data array hasn't already been loaded, load it.
        if (state.games[1] === undefined){
        db.getGameData();
        }
    });

  return (
    <div id="shop">
        <h1>This is Shop</h1>
        <main id="shop-items-container"></main>
        {state.games.map(x => <Shopitem 
            key={x.game_id}
            game_id={x.game_id}
            title={x.title}
            image={x.image}
            rating={x.rating}
            release={x.release}
        /> )}

        {/* {state.games.map(x => <h1>{x.title}</h1>)} */}
    </div>

  );
}

export default Shop;

        