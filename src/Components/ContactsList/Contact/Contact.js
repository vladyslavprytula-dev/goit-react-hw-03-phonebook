import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";
const Contact = ({ name, phone, id, onDeleteContact }) => (
  <>
    <li key={id} className={styles.contacts__item}>
      <p className={styles.contacts__text}>
        {name} : {phone}
      </p>
      <button
        type="button"
        onClick={onDeleteContact}
        className={styles.contacts__btn}
      >
        Удалить
      </button>
    </li>
  </>
);

Contact.defaultProps = {
  name: "",
  number: "",
};

Contact.prototypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
