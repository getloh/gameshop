import { store } from "../../app/store.js";
import { setGames, setError, setStatus, setGameDetail, setGameInventory } from "../web/webSlice.jsx";
import { useSelector } from "react-redux";
import { setUserInfo, setOrderHistory } from "../user/userSlice";
import { useNavigate } from "react-router-dom";


export const SERVER = "http://localhost:8000"


export const  db = {


    async getGameData () {  // Gets all game data - used in /SHOP
        try {
            const response = await fetch(`${SERVER}/api/games/inv`);
            if (response.ok) {
              const jsonResponse = await response.json();
              store.dispatch(setGames(jsonResponse));
              return jsonResponse;
            }
            throw new Error('Request failed!');
          } catch (error) {
            console.log(error); 
          }
        },

    async getSingleGameData (game_id) { // Gets single game data info - used in /SHOP/:game_id
        try {
            const response = await fetch(`${SERVER}/api/games/${game_id}`);
            if (response.ok) {
                const jsonResponse = await response.json();
                store.dispatch(setGameDetail(jsonResponse));
                store.dispatch(setStatus("OK"))
              return jsonResponse;
            }
            throw new Error('Request failed!');
          } catch (error) {
            console.log(error); 
          }
    },

    async getSingleInventoryData (inventory_id) {
        try {
            const response = await fetch(`${SERVER}/api/inventory/${inventory_id}`);
            if (response.ok) {
                const jsonResponse = await response.json();
                store.dispatch(setGameInventory(jsonResponse));
              return jsonResponse;
            }
            throw new Error('Request failed!');
          } catch (error) {
            console.log(error); 
          }
    },

    async getUserData (user_id) {
      try {
          const response = await fetch(`${SERVER}/api/users/${user_id}`, {
            credentials: 'include'
          });
          if (response.ok) {
              const jsonResponse = await response.json();
              store.dispatch(setUserInfo(jsonResponse));
              console.log("userdata grabbed")
            return jsonResponse;
          }
          throw new Error('Request failed!');
        } catch (error) {
          console.log(error); 
        }
  },

  async postOrder (object) {
    try {
      const response = await fetch(`${SERVER}/api/orders/new`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
      });
      if(response.ok){
        const jsonResponse = await response.json();
        store.dispatch(setOrderHistory(jsonResponse));

        window.location.replace("/shop?message=Order%20Recieved");  // Redirect
        return jsonResponse;
      }
      throw new Error('Request failed!');
    } catch(error) {
      console.log(error);
    }

  },

  async getUserOrders (user_id) {
    try {
        const response = await fetch(`${SERVER}/api/orders/user/${user_id}`, {
          credentials: 'include'
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            store.dispatch(setOrderHistory(jsonResponse));
          return jsonResponse;
        }
        throw new Error('Request failed!');
      } catch (error) {
        console.log(error); 
      }
},

async postLogin (object) {
  try {
    const response = await fetch(`${SERVER}/api/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(object)
    });
    if(response.ok){
      console.log(response);
      // const jsonResponse = await response.json();
      // window.location.replace("/shop?message=Logged%20in");  // Redirect
      // return jsonResponse;
      return
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
    store.dispatch(setStatus("Invalid Credentials - Check password"))
  }

},

async postSignup (object) {
  try {
    const response = await fetch(`${SERVER}/api/users/new`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(object)
    });
    if(response.ok){
      // const jsonResponse = await response.json();
      window.location.replace("/shop?message=Logged%20in");  // Redirect
      // return jsonResponse;
      return
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
    store.dispatch(setStatus(error))
  }

},




} // end of db
