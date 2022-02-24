import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { db } from '../features/api/api';
import Shopitem from '../features/shop/Shopitem';
import { setFilter, setStatus } from '../features/web/webSlice';


function Shop() {

    const dispatch = useDispatch();
    const state = useSelector(state => state.web);
    let params = (new URL(document.location)).searchParams;
    let message = params.get("message");

    // Runs on pageload
    useEffect(() => {   // If the games data array hasn't already been loaded, load it.
        if (state.games[1] === undefined){
        db.getGameData();
        }
    });

    useEffect(() => { // if params ?message=<something> , set status
      if (message !== null){
        dispatch(setStatus(`${message}`))
      }
      return () => {
      };
    }, []);

    const getFilter = (filter) => {
      let gamesList = state.games;
      switch (filter){
        case "MD": 
          gamesList = state.games.filter(game => game.platform === "MD");
          break;
        case "PS2":
          gamesList = state.games.filter(game => game.platform === "PS2");
          break;
        case "GC":
          gamesList = state.games.filter(game => game.platform === "GC");
          break;
        case "SNES":
          gamesList = state.games.filter(game => game.platform === "SNES");
          break;
        case "GBA":
          gamesList = state.games.filter(game => game.platform === "GBA");
          break;
        case "On Sale":
          gamesList = state.games.filter(game => game.discount !== null);
          break;
        case "<= £30":
          gamesList = state.games.filter(game => game.price <= 30);
          break;
        case "> £30":
          gamesList = state.games.filter(game => game.price > 30);
          break;
        case "<2000":
          gamesList = state.games.filter(game => game.release < 2000);
          break; 
        case ">2000":
          gamesList = state.games.filter(game => game.release >= 2000);
          break;
        case ">8":
          gamesList = state.games.filter(game => game.rating >= 8);
          break;
        case ">9":
          gamesList = state.games.filter(game => game.rating >= 9);
          break;        
        default: 
          break;
      }
      return gamesList
    }

    const handleFilterClick = (event) => {
      let filter = event.target.outerText
      switch (filter){  // Translates foreign text into sopmething for getFilter()
        case "Show All":
          filter = true;
          break;
        case "Gamecube":
          filter = "GC";
          break;
        case "Megadrive":
          filter = "MD";
          break;
        case "Gameboy Advance":
          filter = "GBA";
          break;
        default:
          break;
      }
      dispatch(setFilter(filter));
    };

  return (
    <div id="shop-page">
    <h1>Games Shop</h1>
      <div id="shop">
        <nav id="shopfilter">
        <br />
          <h3>Filter:</h3>
          <ul>
              <li onClick={handleFilterClick} className="clickable">Show All</li>
            <br />
            <h4>Platforms</h4>
              <li onClick={handleFilterClick} className="clickable">PS2</li>
              <li onClick={handleFilterClick} className="clickable">Gamecube</li>
              <li onClick={handleFilterClick} className="clickable">Megadrive</li>
              <li onClick={handleFilterClick} className="clickable">SNES</li>
              <li onClick={handleFilterClick} className="clickable">Gameboy Advance</li>
            <br />
            <h4>Price Range</h4>
              <li onClick={handleFilterClick} className="clickable">On Sale</li>
              <li onClick={handleFilterClick} className="clickable">&#60;= &#163;30</li>
              <li onClick={handleFilterClick} className="clickable">&#62; &#163;30</li>
            <br />
            <h4>Release Year</h4>
              <li onClick={handleFilterClick} className="clickable">&#60;2000</li>
              <li onClick={handleFilterClick} className="clickable">&#62;2000</li>
            <br />
            <h4>User Rating</h4>
              <li onClick={handleFilterClick} className="clickable">&#62;8</li>
              <li onClick={handleFilterClick} className="clickable">&#62;9</li>
          </ul>
        </nav>

        <main id="shop-items-container">
        {getFilter(state.filter).map(x => <Shopitem 
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

        