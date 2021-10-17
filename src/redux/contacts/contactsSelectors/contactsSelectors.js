import { contactsToRender } from "../../../service/contactsPrepations";

const getFilter = (state) => state.contacts.filter;
const getContacts = (state) => state.contacts.items;
const getIsLoading = (state) => state.contacts.isLoading;

const getContactsData = (state) => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  const contactsData = contactsToRender(contacts, filter);
  return contactsData;
};

export { getContacts, getFilter, getIsLoading, getContactsData };
