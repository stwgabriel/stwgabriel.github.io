import { useState } from 'react';

import { FormContainer } from '../styles';
import Input from './Input';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);

  function checkIfItsEmpty(value) {
    if (value === '') return true;

    return false;
  }

  function isEmailValid(value) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(value);
  }

  function createError(errorName, errorMessage) {
    setErrors((prevState) => ([
      ...prevState, {
        errorName, errorMessage,
      },
    ]));
  }

  function cleanError(errorName) {
    setErrors((prevState) => prevState.filter((error) => error.errorName !== errorName));
  }

  function handleNameChange(e) {
    setName(e.target.value);

    if (checkIfItsEmpty(e.target.value)) {
      createError('name', 'Empty field');
    } else {
      cleanError('name');
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);

    if (checkIfItsEmpty(e.target.value)) {
      createError('email', 'Empty field');
    } else if (!isEmailValid(e.target.value)) {
      cleanError('email');
      createError('email', 'Invalid email');
    } else {
      cleanError('email');
    }
  }

  function handleSubjectChange(e) {
    setSubject(e.target.value);

    if (checkIfItsEmpty(e.target.value)) {
      createError('subject', 'Empty field');
    } else {
      cleanError('subject');
    }
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);

    if (checkIfItsEmpty(e.target.value)) {
      createError('message', 'Empty field');
    } else {
      cleanError('message');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function getError(prop) {
    let errorMessage = '';

    errors.forEach((error) => {
      if (error.errorName === prop) {
        errorMessage = error.errorMessage;
      }
    });

    return errorMessage;
  }

  return (
    <FormContainer onSubmit={(e) => handleSubmit(e)} autoComplete="off">
      <Input
        type="text"
        name="name"
        value={name}
        handle={(e) => handleNameChange(e)}
        error={(property) => getError(property)}
      />
      <Input
        type="text"
        name="email"
        value={email}
        handle={(e) => handleEmailChange(e)}
        error={(property) => getError(property)}
      />
      <Input
        type="text"
        name="subject"
        value={subject}
        handle={(e) => handleSubjectChange(e)}
        error={(property) => getError(property)}
      />
      <Input
        type="text"
        name="message"
        value={message}
        handle={(e) => handleMessageChange(e)}
        error={(property) => getError(property)}
        textarea
      />
      <button type="submit">Submit</button>
    </FormContainer>
  );
}

export default Form;
