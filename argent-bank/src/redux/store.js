//import REDUX
//import { createStore } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers.js'; 

//state initiale 
//actions creators
//reducer

//creation du store 
export const store = configureStore({
    reducer: {
      user: userReducer,
    },
});
