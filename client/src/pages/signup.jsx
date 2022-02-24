import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { SERVER } from '../features/api/api';
import { setStatus } from '../features/web/webSlice';

function Signup() {
  const dispatch = useDispatch();

  let params = (new URL(document.location)).searchParams;
  let auth = params.get("auth");

  let loginURL = SERVER + "/api/login";

  useEffect(() => {
    if (auth === "fail"){
      dispatch(setStatus("Login Failed - Wrong credentials?"))
    }
    return () => {
    };
  }, []);

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

export default Signup;
