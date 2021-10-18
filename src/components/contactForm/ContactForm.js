import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { FORM_INITIAL_DATA } from "../../data/initialData.json";
import dataUI from "../../data/dataUI.json";
import { addContact } from "../../redux/contacts/contactsOperations/contactsOperations";
import { form, btn, input } from "./ContactForm.module.css";
import { getContacts } from "../../redux/contacts/contactsSelectors/contactsSelectors";

const ContactForm = ({ isLoading }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [state, setState] = useState({ ...FORM_INITIAL_DATA });

  useEffect(() => {
    setState({ ...FORM_INITIAL_DATA });
  }, [contacts]);

  const { name, number } = state;

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(name, number));
  };

  const { inputName, inputTel, submitBtn } = dataUI;

  return (
    <form className={form} onSubmit={handleSubmit}>
      <label htmlFor={inputNameId}>{inputName}</label>
      <input
        className={input}
        id={inputNameId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        autoComplete="off"
        onChange={handleChange}
        value={name}
      />
      <label htmlFor={inputNumberId}>{inputTel}</label>
      <input
        className={input}
        id={inputNumberId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        autoComplete="off"
        onChange={handleChange}
        value={number}
      />
      <button className={btn} type="submit" disabled={isLoading}>
        {submitBtn}
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  isLoading: PropTypes.bool,
};

export default ContactForm;
