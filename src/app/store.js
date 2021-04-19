import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});

//reducer is something that listen to actions login or logout
//store is the layer data layer
//userlsice--here we can take the user info
//app s lice
