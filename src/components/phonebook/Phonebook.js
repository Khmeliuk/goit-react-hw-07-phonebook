import { useState } from "react";
import Section from "../section/Section";
import s from "./Phonebook.module.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/action";

export default function Phonebook({}) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();

  function HandleInputChange(e) {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        setId(uuidv4());

        break;
      case "number":
        setNumber(e.currentTarget.value);
        setId(uuidv4());
        break;
      default:
        return;
    }
  }

  function HandleSubmitButton(e) {
    e.preventDefault();
    dispatch(addContact({ name, number, id }));
    reset();
  }

  function reset() {
    setName("");
    setNumber("");
    setId("");
  }

  return (
    <div className={s.phonebook}>
      <Section title="Phonebook" />
      <form className={s.form} onSubmit={HandleSubmitButton}>
        <label className={s.label} htmlFor="name">
          <p className={s.labelName}>Name</p>
          <input
            className={s.input}
            onChange={HandleInputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <p className={s.labelName}>Number</p>
          <input
            className={s.input}
            value={number}
            onChange={HandleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
          <button className={s.button} type="submit">
            Add contact
          </button>
        </label>
      </form>
    </div>
  );
}
