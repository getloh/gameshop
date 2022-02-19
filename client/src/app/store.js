import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import gameSlice from '../features/games/gameSlice';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    games: gameSlice,
    user: userSlice
  }
});
