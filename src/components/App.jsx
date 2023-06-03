import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { MainTitle, ContactsTitle } from './App.styled';

const LS_CONTACTS = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem(LS_CONTACTS);
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_CONTACTS, JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = evt => {
    this.setState({
      contacts: this.state.contacts.filter(contact => {
        return contact.name !== evt.currentTarget.name;
      }),
    });
  };

  addContact = data => {
    const normalizedName = data.name.toLowerCase();

    const isAlreadyInContacts = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isAlreadyInContacts) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState(prevValue => {
      return { contacts: [...prevValue.contacts, data] };
    });
  };

  handleFilterChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    const visiableContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div
        style={{
          backgroundColor: '#f2f2f2',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <MainTitle>PhoneBook</MainTitle>
        <ContactForm onSubmit={this.addContact} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <Contacts
          contactsList={visiableContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
