import PropTypes from 'prop-types';

import { InputContainer } from '../styles';

function Input(props) {
  const { type, name, label } = props;

  return (
    <InputContainer>
      <label htmlFor={name}>
        <input type={type} name={name} value="Some text..." />
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
