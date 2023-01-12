import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container';
import { GlobalStyle } from './GlobalStyle';

import { getContacts } from 'redux/selectors';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        'Your phonebook is empty. Add first contact!'
      )}

      {contacts.length > 0 && <ContactList />}

      <GlobalStyle />
    </Container>
  );
}
