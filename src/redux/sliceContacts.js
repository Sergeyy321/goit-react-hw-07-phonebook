import { createSlice } from '@reduxjs/toolkit';


import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
 
  state.isLoading = false;
  state.error = action.payload;
};

export const sliceContact = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},

  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
       
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
       const contactId = action.payload;
       state.items = state.items.filter(contact => contact.id !== contactId.id);
      
     
    },
    [deleteContact.rejected]: handleRejected,
  },
});
export const tasksReducer = sliceContact.reducer;
export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = sliceContact.actions;


