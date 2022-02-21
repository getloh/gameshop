import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Shop from './pages/shop';
import Nav from './features/nav/nav';
import Info from './pages/info'
import Login from './pages/login';
import Userdash from './pages/userdash'
import Itempage from './pages/itempage';

function App() {
  return (
    <div>
      <Nav></Nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/games/:game_id' element={<Itempage />} />
        <Route path='/info' element={<Info />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<Userdash />} />

      </Routes>

    </div>

  );
}

export default App;
