import Section from "../components/section/Section";
import ContactList from "../components/phonebook/contactList/ContactList";
import Phonebook from "../components/phonebook/Phonebook";
import Filter from "../components/phonebook/filter/Filter";
import { useEffect } from "react";

export default function App() {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem("contacts")) ?? [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ]
  // );

  // const [filter, useFilter] = useState("");

  // function toSubmit(data) {
  //   if (contacts.find((contact) => contact.name === data.name)) {
  //     alert(`${data.name} is already in contact`);
  //   } else setContacts((prevState) => [...prevState, data]);
  // }

  // function handlerFilter(e) {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   useFilter(e.currentTarget.value);
  // }

  // function onButtonDelete(id) {
  //   setContacts((prevState) => {
  //     return prevState.filter((contact) => id !== contact.id);
  //   });
  // }

  // function getFilterContact() {
  //   const filterNormalized = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filterNormalized)
  //   );
  // }

  return (
    <div>
      <Phonebook
      // onSubmit={toSubmit}
      />
      <Section title="Contacts">
        <Filter
        // value={filter} onChange={handlerFilter}
        />
        <ContactList
        // data={getFilterContact()}
        // onDeleteButton={onButtonDelete}
        />
      </Section>
    </div>
  );
}
