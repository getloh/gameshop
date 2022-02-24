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

  let loginURL = SERVER + "/api/users/new";

  useEffect(() => {
    if (auth === "fail"){
      dispatch(setStatus("Login Failed - Wrong credentials?"))
    }
    return () => {
    };
  }, []);

  let test = () => {
    console.log(loginURL);
  }

  return (
    <div id="signup-page">
        <h1>Sign up</h1>
        <section>
            
            <form method='POST' action={loginURL}>
              <label htmlFor="email">E-Mail: </label>
                <input name="email" type="text" placeholder="email"/>
              <label htmlFor="password">Password: </label>
                <input name="password" type="password" placeholder="password"/>
              <label htmlFor="firstname">Firstname: </label>
                <input name="firstname" type="text" placeholder="First Name"/>
              <label htmlFor="lastname">Lastname: </label>
                <input name="lastname" type="text" placeholder="Last Name"/>
              <label htmlFor="address">Address: </label>
               <input name="address" type="text" placeholder="Address"/>
              <label htmlFor="postcode">Postcode: </label>
                <input name="postcode" type="text" placeholder="postcode"/>
              <input type="submit" value="submit" />
            </form>

            <button onClick={test}></button>
        </section>

    </div>

  );
}

export default Signup;
