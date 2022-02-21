import React from 'react';
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div>
        <h1>This is Login</h1>
        <section>
            Woo login box here
            <form action="POST">
            <input type="text" placeholder="email"/>
            <input type="password" placeholder="password"/>
            </form>
        </section>
    </div>

  );
}

export default Login;
