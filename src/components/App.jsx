import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { ContactStyled } from './App/App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import {getContacts} from 'redux/selector'
import { Loader } from './Loader/loader';

export const App = () => {

const dispatch = useDispatch();
const {  isLoading, error } = useSelector(getContacts);

useEffect(() => {
    dispatch(fetchContacts());
}, [dispatch]);
  
  
  return (
    <ContactStyled>
      <Phonebook />
      <div>
        <h2>Contacts</h2>
        <Filter />
        {isLoading === 'pending' && <Loader />}
        {error && <b>{error}</b>}
        <Contacts />
      </div>
    </ContactStyled>
  );
};
