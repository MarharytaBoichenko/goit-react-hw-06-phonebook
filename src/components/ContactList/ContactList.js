import PropTypes from "prop-types";
import { ContactItem } from "../ContactItem/ContactItem";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => {
    console.log(state.contacts);
    return state.contacts;
  });

  const filter = useSelector((state) => {
    console.log(state.filter);
    return state.filter;
  });

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    console.log(contacts);
    if (!contacts) {
      return;
    }
    return contacts.filter((contact) =>
      contact.name.toString().toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContact();

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            <ContactItem name={name} number={number} id={id} />
          </li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
export { ContactList };
