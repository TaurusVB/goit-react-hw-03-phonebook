import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { MainTitle, ContactsTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

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
