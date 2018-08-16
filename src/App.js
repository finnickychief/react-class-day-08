import React, { Component } from 'react';
import Navbar from './components/Navbar';
import uuid from 'uuid';
import ContactCard from './components/ContactCard';
import AddContactForm from './components/AddContactForm';
import AddEditForm from './components/AddEditForm';
import ContextTest from './components/ContextTest';
import consumerWrapper from './components/consumerWrapper';

class App extends Component {
  render() {
    let element;

    const { dispatch, contacts } = this.props.context;

    switch (this.props.context.route) {
      case 'viewContacts':
        element = (
          <div>
            {contacts.map(contact => (
              <ContactCard
                contact={contact}
                key={contact.id}
                goToEdit={true}
                deleteContact={true}
                dispatch={dispatch}
              />
            ))}
          </div>
        );
        break;
      case 'addContact':
        element = <AddContactForm dispatch={dispatch} />;
        break;
      case 'AddEditForm':
        element = (
          <AddEditForm
            dispatch={this.props.context.dispatch}
            contact={this.props.context.currentContact}
          />
        );
        break;
      default:
        element = <div>404 Component not found</div>;
    }

    return (
      <div>
        <Navbar dispatch={dispatch} />
        <div className="container">{element}</div>
        <ContextTest hello={'hi'} style={{ backgroundColor: 'green' }} />
      </div>
    );
  }
}

export default consumerWrapper(App);
