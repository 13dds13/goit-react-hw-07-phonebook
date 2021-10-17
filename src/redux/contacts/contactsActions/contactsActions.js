import { createAction } from "@reduxjs/toolkit";
import { REMOVE_CONTACT, SET_FILTER } from "../actionTypes/actionTypes";

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const removeContact = createAction(REMOVE_CONTACT);

export const setFilter = createAction(SET_FILTER);
