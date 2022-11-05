//import { createStore } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utils/reducers'; 

//state initiale 
//actions creators
//reducer
//creation du store 

export const store = configureStore({
    reducer: {
      user: userReducer,
    },
});
  
//export const store = createStore (reducer);