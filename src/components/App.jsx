import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { filterContacts, getFilter } from 'redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const addPhone = ({ name, number }) => {
    dispatch(addContact({ name, number }));
  };

  const deletePhone = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilter = evt => {
    dispatch(filterContacts(evt.target.value));
  };

  const getSearchingContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addPhone} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList
        contacts={getSearchingContacts()}
        onDeleteContact={deletePhone}
      />
    </div>
  );
};
