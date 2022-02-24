import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

function Shopitem({game_id, title, release, rating, image, platform, inventory_id, stock, price, discount}) {

    const state = useSelector(state => state);
    let discPrice = false;

    if (discount !== null){
        const disc = 1 - (discount / 100);
        discPrice = Number(price * disc).toFixed(2)


    }


    return (
        <Link to={`/shop/games/${inventory_id}`}>
        <div id={game_id} className="shopitem">
            <div className="shopitem-left">
                <img src={image} alt="" />

                
            </div>
            
            <h3>{title}</h3>
            <div className="shopitem-right">
                
                <p>{release}</p> 
                <h5>{platform}</h5>
                {discPrice ? <div> 
                <h3 style={{color: "grey",textDecorationLine: 'line-through'}}>£{price}</h3>
                 <h3 style={{color: "blue"}}>£{discPrice}</h3>
                  </div> : <div><h3><br></br></h3> <h3>£{price}</h3></div>}
            </div>
            
            
        </div>    
        </Link>

  );
}

export default Shopitem;