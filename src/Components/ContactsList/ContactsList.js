import ContactsItem from './ContactsItem/ContactsItem';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import { visibleContacts } from '../../redux/contacts/contacts-selectors';

function Contacts() {
  const contacts = useSelector(visibleContacts);
  const dispatch = useDispatch();
  const onDelete = contactId => dispatch(actions.deleteContact(contactId));
  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            onDelete={() => onDelete(id)}
          />
        ))}
      </ul>
    </>
  );
}

export default Contacts;
