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
    <div id="shop-page">
    <h1>Games Shop</h1>
      <div id="shop">
        <nav id="shopfilter">
          <h4>Filter:</h4>
          <ul>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
            <li>test4</li>
          </ul>
        </nav>
        <main id="shop-items-container">
        {state.games.map(x => <Shopitem 
            key={x.inventory_id}
            game_id={x.game_id}
            title={x.title}
            image={x.image}
            rating={x.rating}
            release={x.release}
            platform={x.platform}
            inventory_id={x.inventory_id}
            stock={x.stock}
            price={x.price}
            discount={x.discount}
        /> )}
        </main>

        {/* {state.games.map(x => <h1>{x.title}</h1>)} */}
    </div>
  </div>

  );
}

export default Shop;

        