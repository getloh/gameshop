import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { SERVER } from '../features/api/api';
import { setStatus } from '../features/web/webSlice';

function Useramend() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.user.userinfo);

  const cookies = document.cookie;
  let userId = cookies
      .split('; ')
      .find(row => row.startsWith('user_id='))
      .split('=')[1];
  

  let amendURL = SERVER + "/api/users/" + userId;

//   let params = (new URL(document.location)).searchParams;
//   let auth = params.get("auth");
//   useEffect(() => {
//     if (auth === "fail"){
//       dispatch(setStatus("Login Failed - Wrong credentials?"))
//     }
//     return () => {
//     };
//   }, []);

  let test = () => {
    console.log(amendURL);
  }

  return (
    <div id="useramend-page">
        <h1>Change user info</h1>
        <section>
            
            <form method='POST' action={amendURL}>
            <input type="hidden" name="_method" value="put" />
              <label htmlFor="email">E-Mail: </label>
                <input name="email" type="text" placeholder={state.email}/>
              <label htmlFor="password">Password: </label>
                <input name="password" type="password" placeholder="password"/>
              <label htmlFor="firstname">Firstname: </label>
                <input name="firstname" type="text" placeholder={state.firstname}/>
              <label htmlFor="lastname">Lastname: </label>
                <input name="lastname" type="text" placeholder={state.lastname}/>
              <label htmlFor="address">Address: </label>
               <input name="address" type="text" placeholder={state.address}/>
              <label htmlFor="postcode">Postcode: </label>
                <input name="postcode" type="text" placeholder={state.postcode}/>
              <input type="submit" value="submit" />
            </form>

            {/* <button onClick={test}>TEST</button> */}
        </section>

    </div>

  );
}

export default Useramend;
