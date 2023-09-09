import { Component } from 'react';
import { nanoid } from 'nanoid';
import CreateContact from './ContactForm/ContactForm';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  handleAddContact = newContact => {
    const isContactExists = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    if (isContactExists) {
      alert(`${newContact.name}is already in contacts.`);
      return;
    }

    const contactToAdd = {
      ...newContact,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactToAdd],
    }));
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <CreateContact onAddContact={this.handleAddContact} />

        <ul>
          {this.state.contacts
            .filter(contact =>
              contact.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase())
            )
            .map(contact => {
              return (
                <ContactList
                  contact={contact}
                  key={contact.id}
                  onDeleteContact={this.handleDeleteContact}
                />
              );
            })}
        </ul>
        <Filter value={filter} onChange={this.handleFilterChange} />
      </>
    );
  }
}
