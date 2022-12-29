import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { PhonebookContainer, Title } from './App.styled';

import Section from 'components/Section/Section';
import Form from 'components/Form/Form';
import ContactsList from 'components/ContactsList/ContactsList';

class App extends Component {
  static defaultProps = {};

  static propTypes = {
    contacts: PropTypes.array,
    name: PropTypes.string,
  };

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandker = data => {
    let id = nanoid();
    let contact = { id: id, name: data.name, number: data.number };
    console.log(data);
    console.log(this.state.contacts);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <PhonebookContainer>
        <Title>Phonebook</Title>
        <Form onSubmit={this.formSubmitHandker} />
        <Section title="Contacts"></Section>
        <ContactsList contacts={this.state.contacts} />
      </PhonebookContainer>
    );
  }
}

export default App;
