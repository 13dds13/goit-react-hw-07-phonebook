import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactsList from "./contactsList/ContactsList";
import styles from "./container/Container.module.css";
import dataUI from "../data/dataUI.json";
import {
  addContact,
  fetchContacts,
} from "../redux/contacts/contactsOperations/contactsOperations";
import {
  getContactsData,
  getFilter,
  getIsLoading,
} from "../redux/contacts/contactsSelectors/contactsSelectors";
import Title from "./Title/Title";

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
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactsDataToRender = useSelector(getContactsData);

  const addNewContact = (name, number) =>
    dispatch(addContact({ name, number }));

  return (
    <div className={styles.container}>
      <Title title={titleMain} />
      <ContactForm
        dataUI={{ inputName, inputTel, submitBtn }}
        addNewContact={addNewContact}
        isLoading={isLoading}
      />
      <Title title={titleSecondary} />
      <Filter inputSearch={inputSearch} filter={filter} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ContactsList
          contactsDataToRender={contactsDataToRender}
          dataUI={{ deleteBtn, noDataToRender }}
        />
      )}
    </div>
  );
};

export default App;
