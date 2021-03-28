import { combineReducers } from 'redux';
// import * as types from './contacts-types';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const items = (state = initialContacts, action) => {
//   switch (action.type) {
//     case types.ADD:
//       return [action.payload, ...state];

//     case types.DELETE:
//       return state.filter(contact => action.payload !== contact.id);

//     default:
//       return state;
//   }
// };

const items = createReducer(initialContacts, {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => payload !== id),
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [actions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
