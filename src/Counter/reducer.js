import { createReducer, createAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { increment, decrement } from "./actions";
console.log(increment.type);

const counterReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

// const counterReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case counterTypes.INCREMENT:
//       //   return {
//       //     ...state,
//       //     counterValue: state.counterValue + payload,
//       //   };
//       console.log(payload);
//       console.log(state);
//       return state + payload;

//     case counterTypes.DECREMENT:
//       return state - payload;
//     //   return {
//     //     ...state,
//     //     counterValue: state.counterValue - payload,
//     //   };
//     default:
//       return state;
//   }

//

const stepReducer = (state = 2, action) => state;
const allCounterReducer = combineReducers({
  value: counterReducer,
  step: stepReducer,
});

export default allCounterReducer;
