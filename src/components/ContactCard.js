import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { deleteContact } from '../actions';

/*
  Create a contact card to represent each person.
  Add propTypes for the properties that are expected.
*/
export default class ContactCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  toggleDetails = () => {
    this.setState({ visible: !this.state.visible });
  };

  editHandler = () => {
    // Load the current user into the store
    this.props.dispatch({
      type: 'SET_CONTACT',
      payload: this.props.contact
    });

    // Change the route to Edit Form
    this.props.dispatch({
      type: 'CHANGE_ROUTE',
      payload: 'AddEditForm'
    });
  };

  render() {
    const { contact } = this.props;

    return (
      <div className="card">
        <div className="card-header" onClick={this.toggleDetails}>
          <h3>{contact.name}</h3>
          <h4>
            <em>- {contact.company}</em>
          </h4>
        </div>
        {this.state.visible ? (
          <div className="card-body">
            <p>
              <strong>Phone:</strong> {contact.phone}
            </p>
            <p>
              <strong>Email:</strong> {contact.email}
            </p>
            {this.props.goToEdit && (
              <button className="btn btn-warning" onClick={this.editHandler}>
                Update Contact
              </button>
            )}
            {this.props.deleteContact && (
              <button
                className="btn btn-danger"
                onClick={deleteContact.bind(
                  this,
                  contact.id,
                  this.props.dispatch
                )}
              >
                Delete
              </button>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
  goToEdit: PropTypes.bool,
  deleteContact: PropTypes.bool
};
