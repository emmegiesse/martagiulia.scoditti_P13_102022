//import REDUX
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers'; 

//creation du store 
export const store = configureStore({
    reducer: {
      user: userReducer,
    },
});
 