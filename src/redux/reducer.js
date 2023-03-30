import { combineReducers } from 'redux';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/add':
      return [...state, action.payload];
    case 'contacts/delete':
      return state.filter(contact => contact.id !== action.payload);
    case 'contacts/filter':
      return state.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase)
      );
    default:
      return state;
  }
};

export const rootReducers = combineReducers({
  contacts: contactsReducer,
});
