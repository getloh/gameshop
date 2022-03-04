import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route, Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import Home from './pages/home';
import Shop from './pages/shop';
import Login from './pages/login';
import Cart from './features/nav/cart';

// import Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Enzyme.configure({ adapter: new Adapter() });


// test('renders learn react link', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

//   expect(getByText(/learn/i)).toBeInTheDocument();
// });

// describe('main pages load without throwing error', () => {
  // it('Loads homepage', () => {
  //   const history = createMemoryHistory()
  //   render(
  //         <Provider store={store}>
  //               <Router history={history}>

  //           <Home />
  //           </Router>
  //         </Provider>
  //   )

    // const div = document.createElement('div');
    // ReactDOM.render(<Home />, div);
  // });
//   it('Loads shop', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Shop />, div);
//   });
//   it('Loads Login', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Login />, div);
//   });
//   it('Loads cart', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Cart />, div);
//   });

// })