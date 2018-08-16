import React, { Component } from 'react';
import Navbar from './components/Navbar';
import uuid from 'uuid';
import ContactCard from './components/ContactCard';
import AddContactForm from './components/AddContactForm';
import AddEditForm from './components/AddEditForm';

export default class App extends Component {
  onSubmit = newContact => {
    //const newContacts = this.state.contacts.concat([newContact]);

    const newContacts = this.state.contacts;
    newContacts.push(newContact);

    this.setState({ contacts: newContacts });
    this.switchRouteParent('viewContacts');
  };

  onEditSubmit = updateContact => {
    // find item to update

    let selectContactIndex = this.state.contacts.findIndex(
      contact => contact.id === updateContact.id
    );

    // replace them
    const contactsArry = this.state.contacts;

    contactsArry[selectContactIndex] = updateContact;

    // update state

    this.setState({ contacts: contactsArry });
    this.switchRouteParent('viewContacts');
  }; // end onEditSubmit

  goToEdit = contact => {
    this.setState({ currentContact: contact });

    // Route to AddEditForm
    this.switchRouteParent('AddEditForm');
  };

  deleteContact = contact => {
    const newArray = this.state.contacts;
    let selectContactIndex;
    for (let i = 0; i < this.state.contacts.length; i++) {
      if (contact.id === this.state.contacts[i].id) {
        selectContactIndex = i;
      }
    }
    newArray.splice(selectContactIndex, 1);
    this.setState({ contacts: newArray });
  };

  render() {
    let element;

    switch (this.props.route) {
      case 'viewContacts':
        element = (
          <div>
            {this.props.contacts.map(contact => (
              <ContactCard
                contact={contact}
                key={contact.id}
                goToEdit={this.goToEdit}
                deleteContact={true}
                dispatch={this.props.dispatch}
              />
            ))}
          </div>
        );
        break;
      case 'addContact':
        element = <AddContactForm onSubmitParent={this.onSubmit} />;
        break;
      case 'AddEditForm':
        element = (
          <AddEditForm
            onSubmitParent={this.onEditSubmit}
            contact={this.state.currentContact}
          />
        );
        break;
      default:
        element = <div>404 Component not found</div>;
    }

    return (
      <div>
        <Navbar dispatch={this.props.dispatch} />
        <div className="container">{element}</div>
      </div>
    );
  }
}
