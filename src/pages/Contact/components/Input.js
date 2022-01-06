import { useState } from 'react';
import PropTypes from 'prop-types';

import { InputContainer } from '../styles';

function Input(props) {
  const { type, name, label } = props;

  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <InputContainer>
      <input value={inputValue} onChange={handleChange} type={type} name={name} required />
      <label htmlFor={name} className="no-events">
        <span>
          {label}
          :
        </span>
      </label>
    </InputContainer>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
