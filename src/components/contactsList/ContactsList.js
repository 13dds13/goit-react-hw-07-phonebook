import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";
import ContactsListItem from "./ContactsListItem/ContactsListItem";
import { removeContact } from "../../redux/contacts/contactsOperations/contactsOperations";

const ContactsList = ({ contactsDataToRender, dataUI }) => {
  const { deleteBtn, noDataToRender } = dataUI;
  const { title, contacts } = contactsDataToRender;

  return contacts.length ? (
    <>
      <p>{title}</p>
      <ul className={styles.listWrap}>
        {contacts.map((contact) => (
          <ContactsListItem
            contact={contact}
            removeContact={removeContact}
            styles={styles}
            deleteBtn={deleteBtn}
            key={contact.id}
          />
        ))}
      </ul>
    </>
  ) : (
    <p>{noDataToRender}</p>
  );
};

ContactsList.propTypes = {
  contactsDataToRender: PropTypes.shape({
    title: PropTypes.string.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  dataUI: PropTypes.shape({
    noDataToRender: PropTypes.string.isRequired,
    deleteBtn: PropTypes.string,
  }).isRequired,
};

export default ContactsList;
