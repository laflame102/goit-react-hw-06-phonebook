import { nanoid } from 'nanoid';

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/add',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/delete',
    payload: contactId,
  };
};

export const filterContacts = value => {
  return {
    type: 'contacts/filter',
    payload: value,
  };
};
