import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContact,
  removeContact,
  setFilter,
} from "../contactsActions/contactsActions";

const items = createReducer([], {
  [addContact]: (state = [], { payload }) => [...state, payload],
  [removeContact]: (state = [], { payload }) =>
    state.filter((contact) => contact.name !== payload),
});

const filter = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});

const contactsReduser = combineReducers({ items, filter });

export default contactsReduser;
