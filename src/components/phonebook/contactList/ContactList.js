import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, fetchItems } from "../../../redux/operation";
import { useEffect } from "react";
import { getFilterContact } from "../../../contacts-selectors";

export default function ContactList() {
  const filterContacts = useSelector(getFilterContact);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchItems());
  // }, [deleteContact]);
  return (
    <ul className={s.contacts}>
      {filterContacts.map((contact) => {
        return (
          <li className={s.listItem} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={s.buttom}
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
