import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact"
const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.length < 0 ? "Contacts" : null}
    <ul className={styles.contacts__list}>
      {contacts.length >= 1 ? (
        contacts.map(({ id, name, phone }) => (
          <li key={id} className={styles.contacts__item}>
            <Contact
              name={name}
              phone={phone}
              onDeleteContact={() => onDeleteContact(id)}
              id={id}
            />
          </li>
        ))
      ) : (
        <p className={styles.contacts__zero}>No contacts found</p>
      )}
    </ul>
  </>
);
ContactList.defaultProps = {
  onDeleteContact: () => {},
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
export default ContactList;
