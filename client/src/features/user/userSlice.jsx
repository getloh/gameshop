import {createSlice} from '@reduxjs/toolkit';
// import { testState } from './testState';

// actions - basic functions which return type and payload

export const setUserinfo = (object) => {
    return {
        type: 'user/setUserinfo',
        payload: object
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


// reducer - initialState

const initialState = {
    userinfo: {
        user_id: -1,
        firstname: 'Guest',
        lastname: '',
        email: ''
    },
    cart: [],
    filter: ''

}

// reducer with switch, or toolkit createSlice with options

const options = {
    name: "user",
    initialState: initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userinfo = action.payload
        },
        AddToCart:(state, action) => {
            state.cart.push(action.payload)
        },
        RemoveFromCart:(state, action) => {
            let index = state.cart.findIndex(cart => cart.inventory_id == action.payload);
            state.cart.splice(index, 1);
        },
        SetFilter:(state, action) => {
            state.filter = action.payload
        }
    }
}

const userSlice = createSlice(options)

// export default
export default userSlice.reducer