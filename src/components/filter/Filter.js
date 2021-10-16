import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { wrap } from "./Filter.module.css";
import { setFilter } from "../../redux/contacts/contactsActions/contactsActions";
import { getFilter } from "../../redux/contacts/contactsSelectors/contactsSelectors";

const Filter = ({ inputSearch }) => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const filterInputId = nanoid();

  return (
    <div className={wrap}>
      <label htmlFor={filterInputId}>{inputSearch}</label>
      <input
        id={filterInputId}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        autoComplete="off"
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};

Filter.propTypes = {
  inputSearch: PropTypes.string.isRequired,
};

export default Filter;