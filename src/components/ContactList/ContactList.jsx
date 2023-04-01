import { List, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getSearchingContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deletePhone = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = getSearchingContacts();

  return (
    <div>
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => deletePhone(id)}>
              Delete
            </button>
          </Item>
        ))}
      </List>
    </div>
  );
};
