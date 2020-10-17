import React, { Component } from "react";
import styles from "./ContactsEditor.module.css";
class ContactsEditor extends Component {
  state = {
    name: "",
    phone: "",
  };
  handleChange = (property) => {
    return (e) => {
      this.setState({ [property]: e.target.value });
    };
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
          value={this.state.name}
          onChange={this.handleChange("name")}
          className={styles.form__input}
        />
        <p className={styles.form__text}>Phone</p>
        <input
          value={this.state.phone}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          onChange={this.handleChange("phone")}
          className={styles.form__input}
        />
        <button type="submit" className={styles.form__btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactsEditor;
