// import * as types from './contacts-types';
import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

// export const addContact = data => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name: data.name,
//     number: data.number,
//   },
// });

export const addContact = createAction('contacts/add', data => ({
  payload: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },
}));

// export const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });
export const deleteContact = createAction('contacts/delete');

export const filterContacts = createAction('contacts/changeFilter');

// export const filterContacts = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
