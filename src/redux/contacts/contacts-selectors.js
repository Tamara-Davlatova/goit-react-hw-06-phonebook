export const getAllContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;

export const visibleContacts = state => {
  const contacts = getAllContacts(state);
  const filter = getFilterValue(state);
  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );
};

export const getContactsName = state => {
  const contacts = getAllContacts(state);
  return contacts.map(contact => contact.name.toLowerCase());
};
