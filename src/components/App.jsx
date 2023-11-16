import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+38-097-635-35-83' },
      { id: 'id-2', name: 'Hermione Kline', number: '+38-067-274-68-29' },
      { id: 'id-3', name: 'Eden Clements', number: '+38-063-825-36-57' },
      { id: 'id-4', name: 'Annie Copeland', number: '+38-093-756-55-22' },
    ],
    filter: '',
  };

  render() {
    return (
      <Layout>
        <H1Title>Phonebook</H1Title>
        <ContactForm addContact={this.addContact} />
        <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        <H2Title>Contacts</H2Title>
        <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </Layout>
    );
  }
}
