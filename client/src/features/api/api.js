

import { store } from "../../app/store.js";
import { setGames, setError, setStatus } from "../web/webSlice.jsx";
import { useSelector } from "react-redux";


const SERVER = "http://localhost:8000"

export const  db = {

    async getGameData () {
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
        }
        
    }

    // getGameData(){          // Grabs gamedata array based on steamID's in state
    //     let users = store.getState().api.steamId;   // Grab the steamIDs and store in 'users'
    //     let gameDataArray = store.getState().api.apiGameData;
    //     store.dispatch(setStatus("Fetching-gamedata"))

    //     for (let i = 0; i < users.length; i++){     // Iterate over users array           
    //         console.log(`Get Game Data for ${users[i]}`);
            
    //         if (gameDataArray.findIndex(object => object.steamid === users[i]) === -1){
    //             fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apikey}&steamid=${users[i]}&format=json&include_appinfo=true&include_played_free_games=true
    //             `).then(response => {
    //             if(response.ok){                            // Response OK
    //                 console.log(response);
    //                 return response.json()
    //             };
    //             throw new Error('Request failed!');         // Error logging
    //             }, networkError => {
    //                 console.log(networkError.message);
    //             }).then(jsonResponse => {                       //* Success
    //                 jsonResponse.response.steamid = users[i];
    //                 store.dispatch(setApiGameData(jsonResponse.response));

    //                 if (jsonResponse.response.game_count > 0){
    //                 store.dispatch(setStatus("Fetched-gamedata"))
    //                 store.dispatch(setError(""))
    //                 }
    //                 else {store.dispatch(setError("No data received, profile may be private"))}
    //             });
    //         }   // end of if statement to find if data already exists
    //         else {console.log(`game data for user ${users[i]} has already been loaded`);
    //         store.dispatch(setStatus("Fetched-gamedataalreadypresent"))        }
    //     }   // end of for loop
        

        

//     }   // End of getGameData()
// }       // End of 'Steam'