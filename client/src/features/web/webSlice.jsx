import {createSlice} from '@reduxjs/toolkit';
// import { testState } from './testState';

//? actions - basic functions which return type and payload

export const setGames = (json) => {
    return {
        type: 'web/setGames',
        payload: json
    }
}

export const setGameDetail = (json) => {
    return {
        type: 'web/setGameDetail',
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

export const addToCart = (object) => {
    return {
        type: 'user/addToCart',
        payload: object
    }
}

export const removeFromCart = (inventory_id) => {
    return {
        type: 'user/removeFromCart',
        payload: inventory_id
    }
}

export const setFilter = (string) => {
    return {
        type: 'user/setFilter',
        payload: string
    }
}

//? reducer - initialState

const initialState = {
    games: [],
    game: {},
    status: '',
    error: '',
    cartvis: false,
    cart: [],
    filter: ''
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
        },
        addToCart:(state, action) => {
            state.cart.push(action.payload)
        },
        removeFromCart:(state, action) => {
            let index = state.cart.findIndex(cart => cart.inventory_id == action.payload);
            state.cart.splice(index, 1);
        },
        setFilter:(state, action) => {
            state.filter = action.payload
        },
        setGameDetail:(state, action) => {
            state.game = action.payload
        }

    }
}

const webSlice = createSlice(options)

// export default
export default webSlice.reducer