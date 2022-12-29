import PropTypes from 'prop-types';
import {
  ContactsListContainer,
  ContactsItem,
  Text,
} from 'components/ContactsList/ContactsList.slyled';

export default function ContactsList({ contacts }) {
  return (
    <ContactsListContainer>
      {contacts.map(contact => {
        return (
          <ContactsItem key={contact.id}>
            <Text>
              {contact.name}: {contact.number}
            </Text>
          </ContactsItem>
        );
      })}
    </ContactsListContainer>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
};
