import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import {
  PhonebookContainer,
  FormWrapper,
  Title,
  Text,
  ContactInput,
  Button,
} from './App.styled';

import Section from 'components/Section/Section';

class App extends Component {
  static defaultProps = {};

  static propTypes = {
    contacts: PropTypes.array,
    name: PropTypes.string,
  };

  state = {
    contacts: [],
    name: '',
  };

  // countTotalFeedback = () => {
  //   const total = Object.values(this.state).reduce((acc, number) => {
  //     return acc + number;
  //   }, 0);
  //   return total;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
  //   if (total === 0) {
  //     return 0;
  //   }
  //   const positiveFeedbackPercentage = Math.round(
  //     (this.state.good * 100) / total
  //   );
  //   return positiveFeedbackPercentage;
  // };

  // onLeaveFeedback = option => {
  //   this.setState(prevState => {
  //     const value = prevState[option];
  //     return {
  //       [option]: value + 1,
  //     };
  //   });
  // };

  render() {
    return (
      <PhonebookContainer>
        <Title>Phonebook</Title>
        <FormWrapper>
          <Text>Name</Text>
          <ContactInput
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Button type="button">Add contact</Button>
        </FormWrapper>
        <Section title="Contacts"></Section>
      </PhonebookContainer>
    );
  }
}

export default App;
