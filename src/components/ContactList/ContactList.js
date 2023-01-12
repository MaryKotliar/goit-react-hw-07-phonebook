import { Contact } from 'components/Contact/Contact';
import { Item } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  return (
    <>
      <ul>
        {contacts.map(item => (
          <Item key={item.id}>
            <Contact contact={item}></Contact>
          </Item>
        ))}
      </ul>
    </>
  );
};
