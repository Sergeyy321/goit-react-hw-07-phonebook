import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { sliceContact } from 'redux/sliceContacts';
import { sliceFilter } from 'redux/sliceFilters';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: sliceContact.reducer,
  filter: sliceFilter.reducer,
});

const persistReducerContacts = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistReducerContacts,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persist_Store = persistStore(store);
