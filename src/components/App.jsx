import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { PhonebookContainer, Title } from './App.styled';

import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

class App extends Component {
  static defaultProps = {};

  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    let id = nanoid();
    let contact = { id: id, name: data.name, number: data.number };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilter = value => {
    this.setState(() => ({
      filter: value,
    }));
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <PhonebookContainer>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Section title="Contacts"></Section>
        <Filter filterByName={this.handleFilter} />
        <ContactsList contacts={this.getContacts()} />
      </PhonebookContainer>
    );
  }
}

export default App;
