import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
export const sliceContact = createSlice({
  name: 'contacts',
  initialState: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContact(state, action) {
      state.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },

    deleteContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = sliceContact.actions;

// import { createSlice } from '@reduxjs/toolkit';

// export const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };
// const getContacts = () => {
//   const savedContacts = localStorage.getItem('savedContacts');
//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   }
//   return initialState;
// };
// const slice = createSlice({
//   name: 'contacts',
//   initialState: getContacts,
//   reducers: {
//     addContact(state, action) {
//       return [...state.contacts, action.payload];
//     },
//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });
// console.log(slice);
// export const { contactsReducer } = slice.reducer
// export const {addContact,deleteContact} = slice.actions
