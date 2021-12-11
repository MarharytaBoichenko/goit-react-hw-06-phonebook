import PropTypes from "prop-types";
import { useState } from "react";

import s from "./ContactForm.module.css";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleOnSubmit} className={s.form}>
      <label className={s.inputLabel}>
        <span className={s.label}> Name</span>
        <input
          onChange={nameHandler}
          type="name"
          // name="name"
          value={name}
          className={s.nameInput}
          required
        ></input>
      </label>
      <label className={s.inputLabel}>
        <span className={s.label}> Number</span>
        <input
          type="tel"
          // name="number"
          onChange={numberHandler}
          value={number}
          className={s.nameInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export { ContactForm };
