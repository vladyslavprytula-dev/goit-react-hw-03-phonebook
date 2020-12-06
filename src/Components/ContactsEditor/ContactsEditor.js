import React, { Component } from "react";
import styles from "./ContactsEditor.module.css";
class ContactsEditor extends Component {
  state = {
    name: "",
    phone: "",
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContacts(this.state.name, this.state.phone);

    this.setState({ name: "", phone: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form__label}>
        <p className={styles.form__text}>Name</p>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          className={styles.form__input}
        />
        <p className={styles.form__text}>Phone</p>
        <input
          name="phone"
          value={this.state.phone}
          pattern="0[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{3}"
          onChange={this.handleChange}
          className={styles.form__input}
          placeholder="0YY-XX-XX-XXX"
        />
        <button type="submit" className={styles.form__btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactsEditor;
