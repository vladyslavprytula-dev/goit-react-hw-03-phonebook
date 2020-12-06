import React from "react";
import PropTypes from "prop-types";
import Contact from "./Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contacts__list}>
    {contacts.length >= 1 ? (
      contacts.map(({ id, name, phone }) => (
        <Contact
          name={name}
          phone={phone}
          onDeleteContact={() => onDeleteContact(id)}
          key={id}
        />
      ))
    ) : (
      <p className={styles.contacts__zero}>No contacts found</p>
    )}
  </ul>
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
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
