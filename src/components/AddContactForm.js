import React, { Component } from 'react';
import Input from './Input';
import PropTypes from 'prop-types'


class AddContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      company: '',
      dateMet: '',
      notes: ''
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const { name, email, phone, company, dateMet, notes } = this.state;

    const newContact = { name, email, phone, company, dateMet, notes };

    this.props.onSubmitParent(newContact);
  };

  render() {
    const { name, email, phone, company, dateMet, notes } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Input
            label="Name"
            name="name"
            placeholder="Enter Name..."
            value={name}
            onChange={this.onChange}
          />
          <Input
            label="Company"
            name="company"
            placeholder="Company Name..."
            value={company}
            onChange={this.onChange}
          />
          <Input
            label="Email"
            name="email"
            placeholder="example@example.com"
            value={email}
            onChange={this.onChange}
          />
          <Input
            label="Phone"
            name="phone"
            placeholder="555-555-5555"
            value={phone}
            onChange={this.onChange}
          />
          <Input
            label="dateMet"
            name="dateMet"
            placeholder="mm/dd/yyyy"
            value={dateMet}
            onChange={this.onChange}
          />
          <Input
            label="Notes"
            name="notes"
            value={notes}
            onChange={this.onChange}
          />
          <button className="btn btn-success">Add Contact</button>
        </form>
      </div>
    );
  }
}

AddContactForm.propTypes = {
  onSubmitParent: PropTypes.func.isRequired
};

export default AddContactForm;
