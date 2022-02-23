import {createSlice} from '@reduxjs/toolkit';
// import { testState } from './testState';

// actions - basic functions which return type and payload

export const setUserInfo = (object) => {
    return {
        type: 'user/setUserInfo',
        payload: object
    }
}

// reducer - initialState

const initialState = {
    userinfo: {
        user_id: -1,
        firstname: 'Guest',
        lastname: '',
        email: ''
    }

}

// reducer with switch, or toolkit createSlice with options

const options = {
    name: "user",
    initialState: initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userinfo = action.payload
            console.log("payload dropped?")
        }

    }
}

const userSlice = createSlice(options)

// export default
export default userSlice.reducer