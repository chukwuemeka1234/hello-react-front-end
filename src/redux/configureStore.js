import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/greetings';

export default configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});
