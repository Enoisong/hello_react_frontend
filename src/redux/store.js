import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
