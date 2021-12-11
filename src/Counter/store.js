import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import "./Counter.css";
import allCounterReducer from "./reducer";

const rootReducer = combineReducers({
  counter: allCounterReducer,
});

const store = configureStore({ reducer: rootReducer });
console.log(store);

export default store;
