import { createReducer } from "@reduxjs/toolkit";
import { addContacts, deleteContacts } from "./actions";

console.log(addContacts.type);

export const contactReducer = createReducer([], {
  [addContacts]: (state, action) => {
    console.log(state);
    console.log(action);
    console.log(action.payload);
    return [...state, action.payload];
  },

  [deleteContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
