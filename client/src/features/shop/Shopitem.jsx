import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

function Shopitem({game_id, title, release, rating, image, platform, inventory_id, stock, price, discount}) {

    const state = useSelector(state => state);
  
    return (
        <Link to={`/shop/games/${inventory_id}`}>
        <div id={game_id} className="shopitem">
            <div className="shopitem-left">
                <img src={image} alt="" />
            </div>
            
            <div className="shopitem-right">
                <h3>{title}</h3>
                <p>{release}</p> 
                <h5>{platform}</h5>
                <h3>£{price}</h3>

                <p>{rating}</p>
            </div>
            
            
        </div>    
        </Link>

  );
}

export default Shopitem;