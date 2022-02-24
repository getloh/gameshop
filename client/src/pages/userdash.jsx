import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../features/user/userSlice';


function Userdash() {
  const state = useSelector(state => state.user.userinfo)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navToOrders = () => {
    navigate(`/userorders`);
  }
  const navToUseramend = () => {
    navigate(`/user/amend`);
  }

  const handleSignOut = () => {
   const initialUserState = {
      user_id: -1,
      firstname: 'Guest',
      lastname: '',
      email: '',
      address: '',
      postcode: ''
  }
    console.log(document.cookie)
    document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    document.cookie = "session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    dispatch(setUserInfo(initialUserState))
    navigate('/');
  }

  return (
    <div>
        <h1>Welcome Back, {state.firstname}</h1>
        <section id="userpage-main">
            <button onClick={navToOrders} className="userpagebutton">
              <h3>View Orders</h3>
              <p>View your previous orders here</p>
            </button>
            <button onClick={navToUseramend} className="userpagebutton">
              <h3>Amend user info</h3>
              <p>Change your personal or delivery information</p>
            </button>
            <button className="userpagebutton">
              <h3>Returns</h3>
              <p>Track Returns</p>
              <p style={{fontSize: "0.7rem", color: "grey"}}>(This button does nothing)</p>
            </button>
            <button className="userpagebutton">
              <h3>Support Portal</h3>
              <p>Returns, Wrong items, Disputes </p>
              <p style={{fontSize: "0.7rem", color: "grey"}}>(This button does nothing)</p>
            </button>
            <button className="userpagebutton">
              <h3>Raise Support Ticket</h3>
              <p>Support Portal</p>
              <p style={{fontSize: "0.7rem", color: "grey"}}>(This button does nothing)</p>
            </button>
            <button style={{border: "rgb(204, 86, 90) 3px solid"}} onClick={handleSignOut} className="userpagebutton">
              <h3>Log Out</h3>
              <p>Sign out of session</p>
            </button>

        </section>
    </div>

  );
}

export default Userdash;
