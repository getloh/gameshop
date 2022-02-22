import React from 'react';
import {Link} from 'react-router-dom'
import { SERVER } from '../features/api/api';

function Login() {

  let loginURL = SERVER + "/api/login";

  return (
    <div id="login-page">
        <h1>User Login</h1>
        <section>
            
            <form method='POST' action="http://localhost:8000/api/login">
            <label htmlFor="email">E-Mail: </label>
              <input name="email" type="text" placeholder="email"/>
              <label htmlFor="password">Password: </label>
              <input name="password" type="password" placeholder="password"/>
              <input type="submit" value="submit" />
            </form>
        </section>
    </div>

  );
}

export default Login;
