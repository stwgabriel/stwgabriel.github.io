import PropTypes from 'prop-types';

import { InputContainer } from '../styles';

function Input(props) {

  const {
    type, name, textarea, value, handle, error,
  } = props;

  const { errorMessage, errorSpecification } = error(name);

  return (
    <>
      <InputContainer className={errorMessage ? 'error' : undefined}>
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

      <div className="errors">
        {errorMessage && (
          <span id="error">
            {errorMessage}
            {errorSpecification && (
              <span id="error-spec">
                (
                {errorSpecification}
                )
              </span>
            )}
          </span>
        )}
      </div>
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
