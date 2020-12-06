import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactsEditor from "../ContactsEditor/ContactsEditor";
import ContactsList from "../ContactsList/ContactList";
import Filter from "../Filter/Filter";
import Section from "../Section/Section";
import styles from "../../styles/main.module.css";
class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  addContact = (name, phone) => {
    const { contacts } = this.state;
    const contact = {
      id: uuidv4(),
      name,
      phone,
    };
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  changeFilter = (filter) => {
    this.setState({ filter });
  };
  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    const visibleContacts = this.getVisibleContact();
    return (
      <div className={styles.container}>
        <Section title="Enter contact">
          <ContactsEditor onAddContacts={this.addContact} />
          {this.state.contacts.length > 1 && (
            <Filter
              value={this.state.filter}
              onChangeFilter={this.changeFilter}
            />
          )}
        </Section>
        <Section title="Your contacts">
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
export default App;
