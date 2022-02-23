import { store } from "../../app/store.js";
import { setGames, setError, setStatus, setGameDetail, setGameInventory } from "../web/webSlice.jsx";
import { useSelector } from "react-redux";
import { setUserInfo } from "../user/userSlice";



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


} // end of db
