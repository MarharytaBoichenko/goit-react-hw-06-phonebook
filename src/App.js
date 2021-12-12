import "./App.module.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import { Heading } from "./components/Heading/Heading";
import { Container } from "./components/Container/Container";
// import Counter from "./Counter/counter";

export default function App() {
  return (
    <>
      <Container>
        {/* // <Counter /> */}
        <Heading text="Phonebook" />
        <ContactForm />
        <Heading text="Contacts" />
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}
