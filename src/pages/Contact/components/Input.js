import PropTypes from 'prop-types';

import { InputContainer } from '../styles';

function Input(props) {
  const {
    type, name, textarea, value, handle,
  } = props;

  return (
    <InputContainer>
      {!textarea ? (
        <input
          value={value}
          onChange={(e) => handle(e)}
          type={type}
          name={name}
          required
        />
      ) : (
        <textarea
          value={value}
          onChange={(e) => handle(e)}
          type={type}
          name={name}
          cols="40"
          required
        />
      )}
      <label htmlFor={name} className="no-events">
        <span>
          {name.charAt(0).toUpperCase() + name.slice(1)}
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
  textarea: PropTypes.bool,
  value: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default Input;
