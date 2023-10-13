import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchContacts } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

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
    addContact(state, action) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.phone,
      });
    },

    deleteContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});
export const tasksReducer = sliceContact.reducer;
export const {
  addContact,
  deleteContact,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = sliceContact.actions;


