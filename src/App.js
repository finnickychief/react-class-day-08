import React, { Component } from 'react';
import Navbar from './components/Navbar';
import uuid from 'uuid';
import ContactCard from './components/ContactCard';
import AddContactForm from './components/AddContactForm';
import AddEditForm from './components/AddEditForm';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          id: uuid(),
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '111-111-1111',
          notes: 'Generic guy',
          company: 'Doe Inc',
          dateMet: '5-6-2015'
        },
        {
          id: uuid(),
          name: 'Sally Blogs',
          email: 'sblogs@gmail.com',
          phone: '222-222-2222',
          notes: 'Blogger',
          company: 'weBlog',
          dateMet: '8-14-2016'
        },
        {
          id: uuid(),
          name: 'Karen Syles',
          email: 'sylesk@gmail.com',
          phone: '333-333-3333',
          notes: 'Kyles for short',
          company: 'Starbucks',
          dateMet: '6-8-2015'
        },
        {
          id: uuid(),
          name: 'Jack Ford',
          email: 'ford2@gmail.com',
          phone: '444-444-4444',
          notes: 'Not a car guy',
          company: 'Honda',
          dateMet: '4-21-2017'
        }
      ],
      route: 'viewContacts'
    };
  }

  switchRouteParent = route => {
    this.setState({ route: route });
  };

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

    switch (this.state.route) {
      case 'viewContacts':
        element = (
          <div>
            {this.state.contacts.map(contact => (
              <ContactCard
                contact={contact}
                key={contact.id}
                goToEdit={this.goToEdit}
                deleteContact={this.deleteContact}
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
        <Navbar switchRouteChild={this.switchRouteParent} />
        <div className="container">{element}</div>
      </div>
    );
  }
}
