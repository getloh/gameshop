import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import { db } from '../features/api/api';

function Shop() {
    // Runs on pageload
    useEffect(() => {
        console.log("load!")
        db.getGameData();
        return () => {
            //not needed
        };
    }, []);

  return (
    <div>
        <h1>This is Shop</h1>

    </div>

  );
}

export default Shop;