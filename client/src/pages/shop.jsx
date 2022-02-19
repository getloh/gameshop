import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'

function Shop() {
    useEffect(() => {
        console.log("load!")
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