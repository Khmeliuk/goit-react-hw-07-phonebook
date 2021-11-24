import Section from "../components/section/Section";
import ContactList from "../components/phonebook/contactList/ContactList";
import Phonebook from "../components/phonebook/Phonebook";
import Filter from "../components/phonebook/filter/Filter";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../redux/operation";

export default function App() {
  const isLoading = useSelector((state) => state.contacts.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading) dispatch(fetchItems());
  }, [dispatch, isLoading]);

  const buble = {
    prop: "spinningBubbles",
    name: "SpinningBubbles",
  };

  return (
    <div>
      <Phonebook />

      <Section title="Contacts">
        <Filter />
        <ContactList />
        {isLoading && (
          <ReactLoading
            type={buble.prop}
            color={"#2b2c6d"}
            height={100}
            width={100}
          />
        )}
      </Section>
    </div>
  );
}
