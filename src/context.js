import React from 'react';
import { getContacts } from './actions';

// Create the context
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return {
        ...state,
        contacts: action.payload.map(contact => {
          contact.company = contact.company.name;
          return contact;
        })
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        route: 'viewContacts'
      };
    case 'SET_CONTACT': // Load the current contact so it is available for editing
      return {
        ...state,
        currentContact: action.payload
      };
    case 'UPDATE_CONTACT': // Apply the changes to the current contact.
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id ? action.payload : contact
        ),
        route: 'viewContacts'
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          // Grab all contacts that are NOT the one we're trying to delete.
          contact => contact.id !== action.payload
        )
      };
    case 'CHANGE_ROUTE':
      return {
        ...state,
        route: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends React.Component {
  // Holds the default store for our application
  state = {
    contacts: [],
    route: 'viewContacts',

    // The dispatch is part of the store and is what provides access to the reducer
    // To be able to modify the store, you need access to the store.
    // The reason for this is because the reducer requires the state of the store, and the only way to see the state is to be within the component that holds it. In this case, that is the Provider
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    console.log('in COmponentDidMount');
    // Get the users for our contacts
    getContacts(this.state.dispatch);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
