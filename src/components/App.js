import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactsList from "./contactsList/ContactsList";
import styles from "./container/Container.module.css";
import dataUI from "../data/dataUI.json";
import { fetchContacts } from "../redux/contacts/contactsOperations/contactsOperations";
import {
  getFilter,
  getIsLoading,
} from "../redux/contacts/contactsSelectors/contactsSelectors";
import Title from "./Title/Title";

const { titleMain, titleSecondary } = dataUI;

const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Title title={titleMain} />
      <ContactForm isLoading={isLoading} />
      <Title title={titleSecondary} />
      <Filter filter={filter} />
      {isLoading ? <p>Loading...</p> : <ContactsList />}
    </div>
  );
};

export default App;
