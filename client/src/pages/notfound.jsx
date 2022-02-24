import React from 'react';
import {Link} from 'react-router-dom'

function Notfound() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: 'center', margin: "30vh 0"}}>
        <h1>404</h1>
        <h1>Page not found</h1>

        <p>Not sure how you got here, but there is no page here, I hope this is your fault and not mine :(</p>


    </div>

  );
}

export default Notfound;
