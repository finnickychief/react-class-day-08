import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  render() {
    const { contact } = this.props;
    let element;
    if (this.state.visible) {
      element = (
        <div className="card-body">
          <p>
            <strong>Phone:</strong> {contact.phone}
          </p>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
          <p>
            <strong>Met:</strong> {contact.dateMet}
          </p>
          <p>
            <strong>Notes:</strong> {contact.notes}
          </p>
        </div>
      );
    } else {
      element = null;
    }

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
            <p>
              <strong>Met:</strong> {contact.dateMet}
            </p>
            <p>
              <strong>Notes:</strong> {contact.notes}
            </p>
            {this.props.goToEdit && (
              <button
                className="btn btn-warning"
                onClick={this.props.goToEdit.bind(this, contact)}
              >
                Update Contact
              </button>
            )}
            {this.props.deleteContact && (
              <button
                className="btn btn-danger"
                onClick={this.props.deleteContact.bind(this, contact)}
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
  goToEdit: PropTypes.func,
  deleteContact: PropTypes.func
};
