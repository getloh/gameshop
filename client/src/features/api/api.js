import { store } from "../../app/store.js";
import { setGames, setError, setStatus, setGameDetail } from "../web/webSlice.jsx";
import { useSelector } from "react-redux";



export const SERVER = "http://localhost:8000"


export const  db = {
    

    async getGameData () {  // Gets all game data - used in /SHOP
        try {
            const response = await fetch(`${SERVER}/api/games`);
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
              return jsonResponse;
            }
            throw new Error('Request failed!');
          } catch (error) {
            console.log(error); 
          }
        }


} // end of db
