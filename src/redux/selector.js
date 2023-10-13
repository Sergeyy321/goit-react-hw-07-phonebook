
export const selectFilter = state => state.filter;
export const getContacts = state => state.contacts;
export const selectId = state => state.contacts.items.id;
export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
 