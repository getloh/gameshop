import {createSlice} from '@reduxjs/toolkit';
// import { testState } from './testState';

//? actions - basic functions which return type and payload

export const setGames = (json) => {
    return {
        type: 'games/setGames',
        payload: json
    }
}

//? reducer - initialState

const initialState = {
    games: [],

}

//? reducer with switch, or toolkit createSlice with options

const options = {
    name: "games",
    initialState: initialState,
    reducers: {
        setGames: (state,action) => {
            state.games = action.payload;
        }

    }
}

const gameSlice = createSlice(options)

// export default
export default gameSlice.reducer