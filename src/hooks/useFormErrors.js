import { useState } from 'react';

function useFormErrors() {

  const [errors, setErrors] = useState([]);

  function checkIfItsEmpty(value) {

    if (value === '') return true;

    return false;
  }

  function createError(errorName, errorMessage, errorSpecification = null) {

    setErrors((prevState) => ([
      ...prevState, {
        errorName, errorMessage, errorSpecification,
      },
    ]));
  }

  function cleanError(errorName) {

    setErrors((prevState) => prevState.filter((error) => error.errorName !== errorName));
  }

  function getError(prop) {

    let errorMessage = '';
    let errorSpecification = '';

    errors.forEach((error) => {
      if (error.errorName === prop) {
        errorMessage = error.errorMessage;
        errorSpecification = error.errorSpecification;
      }
    });

    return { errorMessage, errorSpecification };
  }

  return {
    errors,
    checkIfItsEmpty,
    createError,
    cleanError,
    getError,
  };
}

export default useFormErrors;
