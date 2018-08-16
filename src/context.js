import React from 'react';
import uuid from 'uuid';

// Create the context
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
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
    route: 'viewContacts',

    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
