// import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/actions';

// const LS_CONTACTS = 'contacts';
// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem(LS_CONTACTS);
//   if (savedContacts !== null) {
//     const parsedContacts = JSON.parse(savedContacts);
//     return parsedContacts;
//   }

//   return [];
// };

export const App = () => {
  // const [contacts, setContacts] = useState(getInitialContacts);
  // const [filter, setFilter] = useState('');
  const allContacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem(LS_CONTACTS, JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {

  //   const contact = { id: nanoid(), name, number };
  //   setContacts(prevState => [contact, ...prevState]);
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  const handleFilter = evt => {
    dispatch(filterContacts(evt.target.value));
  };

  // const getAvailableContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter value={filterValue} onChange={handleFilter} />
      <ContactList contacts={allContacts} />
    </div>
  );
};
