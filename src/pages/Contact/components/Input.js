import PropTypes from 'prop-types';

import { InputContainer } from '../styles';

function Input(props) {
  const {
    type, name, textarea, value, handle, error,
  } = props;

  const errorText = error(name);

  return (
    <>
      <InputContainer className={errorText ? 'error' : undefined}>
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
            required
          />
        )}
        <label htmlFor={name} className="no-events">
          <span>
            {name.charAt(0).toUpperCase() + name.slice(1)}
            :*
          </span>
        </label>
      </InputContainer>
      {errorText && <span id="error">{errorText}</span>}
    </>
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
  error: PropTypes.func.isRequired,
};

export default Input;
