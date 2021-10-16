import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactsList from "./contactsList/ContactsList";
import styles from "./container/Container.module.css";
import dataUI from "../data/dataUI.json";
import { addContact } from "../redux/contacts/contactsActions/contactsActions";
import { getContactsData } from "../redux/contacts/contactsSelectors/contactsSelectors";

const {
  titleMain,
  titleSecondary,
  inputName,
  inputTel,
  submitBtn,
  deleteBtn,
  inputSearch,
  noDataToRender,
} = dataUI;

const App = () => {
  const contactsDataToRender = useSelector(getContactsData);

  const dispatch = useDispatch();

  const addNewContact = (name, number) => dispatch(addContact(name, number));

  const { container, title } = styles;

  return (
    <div className={container}>
      <h2 className={title}>{titleMain}</h2>

      <ContactForm
        dataUI={{ inputName, inputTel, submitBtn }}
        addNewContact={addNewContact}
      />

      <h2 className={title}>{titleSecondary}</h2>

      <Filter inputSearch={inputSearch} />

      <ContactsList
        contactsDataToRender={contactsDataToRender}
        dataUI={{ deleteBtn, noDataToRender }}
      />
    </div>
  );
};

export default App;
