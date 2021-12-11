import PropTypes from "prop-types";
import { ContactItem } from "../ContactItem/ContactItem";
import { useSelector } from "react-redux";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => {
    console.log(state.contacts);
    return state.contacts;
  });

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            <ContactItem name={name} number={number} id={id} />
            {/* <button
              type="button"
              className={s.button}
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              Delete
            </button> */}
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
