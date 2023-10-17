import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { ContactStyled } from './App/App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import { selectIsLoading, selectError, selectContacts } from 'redux/selector';
import { Loader } from './Loader/loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
const dispatch = useDispatch();
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectError);

  
  
  return (
    <ContactStyled>
      <Phonebook />
      <div>
        <h2>Contacts</h2>
        <Filter />
        {contacts.length === 0 && 'No contacts found'}
        {isLoading === true && <Loader />}
        {error && <b>{error}</b>}
        <Contacts />
      </div>
    </ContactStyled>
  );
};
