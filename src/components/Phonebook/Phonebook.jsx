import { PhonebookStyled, Input } from './Phonebook.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Btn } from './Phonebook.styled';
import { useState } from 'react';
import { addContact } from 'redux/sliceContacts';
const nameId = nanoid(9);
const numberId = nanoid(9);
export const Phonebook = ({ onAddContact }) => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   number: '',
  // });

  //   const onChange = (event) => {
  //  const { name, value } = event.target;
  //  setFormData({ ...formData, [name]: value });
  //   };
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setNumber(value);
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  //  const  onFormSubmit = event => {
  //    event.preventDefault();
  //     onAddContact(dispatch(addContact({ name, number })));
  //     reset()
  //   };

  return (
    <PhonebookStyled>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          if (
            contacts.some(
              value =>
                value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
            )
          ) {
            alert(`${name} is alredy in contacts`);
          } else {
            dispatch(addContact({ name, number }));
          }
          reset();
        }}
      >
        <label htmlFor={nameId}>
          <h2>Name</h2>
          <Input
            id={nameId}
            value={name}
            type="text"
            onChange={onChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={numberId}>
          <h2>Number</h2>
          <Input
            id={numberId}
            type="tel"
            value={number}
            onChange={onChange}
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Btn type="submit">Add contact</Btn>
      </form>
    </PhonebookStyled>
  );
};
