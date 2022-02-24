import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Shop from './pages/shop';
import Nav from './features/nav/nav';
import Info from './pages/info';
import Login from './pages/login';
import Userdash from './pages/userdash';
import Itempage from './pages/itempage';
import Checkout from './pages/checkout';
import Payment from './pages/payment';
import Notfound from './pages/notfound';
import Userorders from './pages/userorders';
import Signup from './pages/signup';

function App() {
  return (
    <div>
      <Nav></Nav>
      <div id="maincontent">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/games/:inventory_id' element={<Itempage />} />
        <Route path='/info' element={<Info />} />
        <Route path='/login' element={<Login />} />
        <Route path='/userdash' element={<Userdash />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkout/pay' element={<Payment />} />
        <Route path='/userorders' element={<Userorders />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/user/amend' element={<Useramend />} /> */}
        <Route path='*' element={<Notfound />} />
      </Routes>
      </div>
    </div>

  );
}

export default App;
