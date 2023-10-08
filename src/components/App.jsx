import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { ContactStyled } from './App/App.styled';
import { useSelector } from 'react-redux';

export const App = () => {

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () => {
    if (Array.isArray(contacts)) {
      const normalizedValue = filter.toLowerCase().trim();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedValue)
      );
    } else {
      return [];
    }
  };

  return (
    <ContactStyled>
      <Phonebook  />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <Contacts getContacts={getFilteredContacts()}  />
      </div>
    </ContactStyled>
  );
};
