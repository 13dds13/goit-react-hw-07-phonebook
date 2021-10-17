import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  fetchContactsRequest,
  fetchContactsSuccess,
  removeContactRequest,
  removeContactSuccess,
  setFilter,
} from "../contactsActions/contactsActions";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state = [], { payload }) => [...state, payload],
  [removeContactSuccess]: (state = [], { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: (state) => !state,
  [addContactRequest]: (state) => !state,
  [removeContactRequest]: (state) => !state,
});

const filter = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});

const contactsReduser = combineReducers({ items, filter, isLoading });

export default contactsReduser;
