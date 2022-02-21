import { configureStore } from '@reduxjs/toolkit';

import gameSlice from '../features/web/webSlice';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    web: gameSlice,
    user: userSlice
  }
});
