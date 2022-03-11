import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';


import Nav from './features/nav/Nav'
import Dashboardsales from './pages/Dashboardsales';
import Dashboardstock from './pages/Dashboardstock';
import Dashboardorders from './pages/Dashboardorders';
import Home from './pages/Home';
import Dispatch from './pages/Dispatch';
import Login from './pages/Login';

function App() {
  function add (num1: number, num2: number){}


  const CheckCookie = () => {

    const cookies = document.cookie;

    let staffSession = cookies?.split('; ')
      ?.find(row => row.startsWith('staffsession_id='))
      ?.split('=')[1];

    if (staffSession){
      if (staffSession[2] === staffSession[13]){
        return (
          
          <Routes>
          <Route path='/admin' element={<Home />} />
          <Route path='/admin/stock' element={<Dashboardstock />} />
          <Route path='/admin/sales' element={<Dashboardsales />} />
          <Route path='/admin/orders' element={<Dashboardorders />} />
          <Route path='/admin/dispatch' element={<Dispatch />} />
          </Routes>
        )
      }
    }
    
      return (<Login/>)
    
    


  }

    
  

  

  return (
    <div id="rootcontent">
      <Nav></Nav>

      <div id="maincontent">
      <CheckCookie />

      </div>
    </div>
  );
}

export default App;
