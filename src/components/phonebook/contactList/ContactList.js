import s from "./ContactList.module.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/action";
import { useEffect } from "react";
export default function ContactList() {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.contacts.filter);
  const contact = useSelector((state) => state.contacts.items);
  const filterContacts = getFilterContact();

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);

  function getFilterContact() {
    const filterNormalized = value.toLowerCase();
    return contact.filter((contact) =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  }
  getFilterContact();

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

// ContactList.prototype = {
//   prop: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       number: PropTypes.number,
//     })
//   ).isRequired,
// };
