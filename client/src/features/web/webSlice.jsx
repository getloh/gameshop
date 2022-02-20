import {createSlice} from '@reduxjs/toolkit';
// import { testState } from './testState';

//? actions - basic functions which return type and payload

export const setGames = (json) => {
    return {
        type: 'web/setGames',
        payload: json
    }
}
export const setStatus = (string) => {
    return {
        type: 'web/setStatus',
        payload: string
    }
}

export const setError = (string) => {
    return {
        type: 'web/setError',
        payload: string
    }
}

export const setCartVis = (x) => {
    return {
        type: 'web/setCartVis',
        payload: x
    }
}

//? reducer - initialState

const initialState = {
    games: [],
    status: '',
    error: '',
    cartvis: false
}

//? reducer with switch, or toolkit createSlice with options

const options = {
    name: "web",
    initialState: initialState,
    reducers: {
        setGames: (state,action) => {
            state.games = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setCartVis: (state, action) => {
            state.cartvis = !state.cartvis
        }

    }
}

const webSlice = createSlice(options)

// export default
export default webSlice.reducer