import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';


import Nav from './features/nav/Nav'
import Dashboardsales from './pages/Dashboardsales';
import Dashboardstock from './pages/Dashboardstock';
import Dashboardorders from './pages/Dashboardorders';
import Home from './pages/Home';
import Dispatch from './pages/Dispatch';

function App() {
  function add (num1: number, num2: number){}

  return (
    <div id="rootcontent">
      <Nav></Nav>

      <div id="maincontent">

      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/stock' element={<Dashboardstock />} />
         <Route path='/sales' element={<Dashboardsales />} />
         <Route path='/orders' element={<Dashboardorders />} />
         <Route path='/dispatch' element={<Dispatch />} />
        {/* <Route path='/shop' element={<Shop />} />
        <Route path='/shop/games/:inventory_id' element={<Itempage />} />
        <Route path='/info' element={<Info />} />
        <Route path='/login' element={<Login />} />
        <Route path='/userdash' element={<Userdash />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkout/pay' element={<Payment />} />
        <Route path='/userorders' element={<Userorders />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/user/amend' element={<Useramend />} />
        <Route path='*' element={<Notfound />} /> */}
      </Routes>
      </div>
    </div>
  );
}

export default App;
