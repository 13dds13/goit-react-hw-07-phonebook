import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";
import { removeContact } from "../../redux/contacts/contactsActions/contactsActions";

const { listWrap, listItem, name, number, btn } = styles;

const ContactsList = ({ contactsDataToRender, dataUI }) => {
  const dispatch = useDispatch();

  const { deleteBtn, noDataToRender } = dataUI;
  const { title, contacts } = contactsDataToRender;

  return contacts.length ? (
    <>
      <p>{title}</p>
      <ul className={listWrap}>
        {contacts.map((item) => (
          <li className={listItem} key={item.id}>
            {" "}
            <p className={name}>
              {item.name}: <span className={number}>{item.number}</span>
            </p>
            <button
              className={btn}
              type="button"
              onClick={() => dispatch(removeContact(item.name))}
            >
              {deleteBtn}
            </button>
          </li>
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
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  dataUI: PropTypes.shape({
    deleteBtn: PropTypes.string.isRequired,
    noDataToRender: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactsList;
