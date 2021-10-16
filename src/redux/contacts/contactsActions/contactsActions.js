import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  SET_FILTER,
} from "../actionTypes/actionTypes";

const addContact = createAction(ADD_CONTACT, (name, number) => ({
  payload: { id: nanoid(), number, name },
}));

const removeContact = createAction(REMOVE_CONTACT);

const setFilter = createAction(SET_FILTER);

export { addContact, removeContact, setFilter };
