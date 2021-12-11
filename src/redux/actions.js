import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addContacts = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

export const visibleContacts = createAction("contacts/getVisible");
export const deleteContacts = createAction("contacts/delete");

export const changeFilter = createAction("filter/change");
