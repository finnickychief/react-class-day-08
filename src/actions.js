import axios from 'axios';

export const getContacts = dispatch => {
  // Query the API to get the users
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(result => {
      console.log(result);
      // Dispatch the result to the reducer to load them into the state
      dispatch({
        type: 'GET_CONTACTS',
        payload: result.data
      });
    })
    .catch(err => console.log(err));
};

export const addContact = (newContact, dispatch) => {
  axios
    .post('https://jsonplaceholder.typicode.com/users', newContact)
    .then(result =>
      dispatch({
        type: 'ADD_CONTACT',
        payload: result.data
      })
    )
    .catch(err => console.log(err));
};

export const deleteContact = (id, dispatch) => {
  axios
    .delete('https://jsonplaceholder.typicode.com/users/' + id)
    .then(result =>
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      })
    )
    .catch(err => console.log(err));
};

export const updateContact = (id, contact, dispatch) => {
  axios
    .put('https://jsonplaceholder.typicode.com/users/' + id, contact)
    .then(result =>
      dispatch({
        type: 'UPDATE_CONTACT',
        payload: contact
      })
    )
    .catch(err => console.log(err));
};
