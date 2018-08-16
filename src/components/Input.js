import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const { label, type, onChange, value, placeholder, name } = props;

  return (
    <div>
      <div className="form-group">
        <label>{label}:</label>
        <input
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

Input.defaultProps = {
  type: 'text',
  placeholder: '. . .'
};

/*
  Label
  type
  onChange
  value
  placeholder
*/

export default Input;
