import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from "../contacts/contactsActions/contactsActions";
import axios from "axios";
import { BASE_URL } from "../../data/firebase.json";

const addContact = (data) => (dispatch) => {
  const isAlreadyInContacts = dispatch(addContactRequest(data));
  if (isAlreadyInContacts) return;
  axios
    .post(BASE_URL, data)
    .then((res) => {
      const id = res.data.name;
      dispatch(addContactSuccess({ ...data, id }));
    })
    .catch((error) => dispatch(addContactError(error)))
    .finally(dispatch(addContactRequest(data)));
};

export default addContact;
