import { useState } from 'react';
import PropTypes from 'prop-types';

import { InputContainer } from '../styles';

function Input(props) {
  const {
    type, name, label, textarea,
  } = props;

  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <InputContainer>
      {!textarea ? (
        <input
          value={inputValue}
          onChange={(e) => handleChange(e)}
          type={type}
          name={name}
          required
        />
      ) : (
        <textarea
          value={inputValue}
          onChange={(e) => handleChange(e)}
          type={type}
          name={name}
          cols="40"
          required
        />
      )}
      <label htmlFor={name} className="no-events">
        <span>
          {label}
          :
        </span>
      </label>
    </InputContainer>
  );
}

Input.defaultProps = {
  textarea: false,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
};

export default Input;
