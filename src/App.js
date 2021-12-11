import { useDispatch, useSelector } from "react-redux";
import "./App.module.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import s from "./App.module.css";
import * as actions from "./redux/actions";
// import Counter from "./Counter/counter";

export default function App() {
  const contacts = useSelector((state) => {
    return state.contacts;
  });

  const filter = useSelector((state) => {
    console.log(state.filter);
    return state.filter;
  });
  console.log(filter);

  const dispatch = useDispatch();

  const filterHandler = (e) => {
    dispatch(actions.changeFilter(e.target.value));
  };

  const addContactFromForm = ({ name, number }) => {
    const nameInContact = name.toLowerCase().trim();
    const isInContact = contacts.find(
      (cont) => cont.name.toLowerCase().trim() === nameInContact
    );
    if (isInContact) {
      alert(`${name} is already in contact`);
      return;
    }
    dispatch(actions.addContacts({ name, number }));
  };
  // удаление  перенесено в ContactItem,  чтоб не прокидывать проп  deleteContact  ,  так норм?
  // const deleteContact = (id) => {
  //   console.log(id);
  //   dispatch(actions.deleteContacts(id));
  // };

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

  return (
    // <Counter />
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactFromForm} />
      <h2>Contacts</h2>
      <Filter onChange={filterHandler} />
      {contacts && (
        <ContactList
          contacts={getVisibleContact()}
          //не  надо  пропс
          // onDeleteContact={deleteContact}
        />
      )}
    </div>
  );
}
