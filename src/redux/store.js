import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { sliceContact } from 'redux/sliceContacts';
import { sliceFilter } from 'redux/sliceFilters';

// Combine your reducers
const rootReducer = combineReducers({
  contacts: sliceContact.reducer,
  filter: sliceFilter.reducer,
});

// Create your Redux store
export const store = configureStore({
  reducer: rootReducer,
});
