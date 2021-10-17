import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  removeContact,
  setFilter,
} from "../contactsActions/contactsActions";

const items = createReducer([], {
  [addContactSuccess]: (state = [], { payload }) => [...state, payload],
  [removeContact]: (state = [], { payload }) =>
    state.filter((contact) => contact.name !== payload),
});

const isLoading = createReducer(false, {
  [addContactRequest]: (state) => !state,
});

const filter = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});

const contactsReduser = combineReducers({ items, filter, isLoading });

export default contactsReduser;
