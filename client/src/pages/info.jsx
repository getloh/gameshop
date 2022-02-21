import React from 'react';
import {Link} from 'react-router-dom'

function Info() {
  return (
    <div>
        <h1>This is info</h1>
        <section>
            <p>Hi, Thanks for visiting. <br />
             This site was made by Steven Loh as a portfolio project <br />
             It uses a React Redux front end, with Express (node) and postgreSQL backend.</p>
        </section>
    </div>

  );
}

export default Info;
