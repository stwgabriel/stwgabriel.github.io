import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import useFormErros from '../../../hooks/useFormErrors';

import isEmailValid from '../../../utils/isEmailValid';
import clickToExit from '../../../utils/clickToExit';

import Input from './Input';
import Button from './Button';

import { FormContainer } from '../styles';

function Form({ handleRenderEmailSentModal }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const {
    errors,
    checkIfItsEmpty,
    createError,
    cleanError,
    getError,
  } = useFormErros();
  let isAllFilled = (
    name !== ''
    && email !== ''
    && subject !== ''
    && message !== ''
    && errors.length === 0
  );

  function handleNameChange(e) {

    setName(e.target.value);

    if (checkIfItsEmpty(e.target.value)) {
      createError('name', 'Empty field', 'This field is required');
    } else {
      cleanError('name');
    }
  }
  function handleEmailChange(e) {

    setEmail(e.target.value);

    if (checkIfItsEmpty(e.target.value)) {
      createError('email', 'Empty field', 'This field is required');
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

      createError('subject', 'Empty field', 'This field is required');
    } else {
      cleanError('subject');
    }
  }
  function handleMessageChange(e) {

    setMessage(e.target.value);

    if (checkIfItsEmpty(e.target.value)) {

      createError('message', 'Empty field', 'This field is required');
    } else {
      cleanError('message');
    }
  }
  function cleanAllFields() {

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }
  function handleCLickToExit(event) {

    if (clickToExit(event.target, 'click-to-exit')) {

      handleRenderEmailSentModal();
    }
  }

  useEffect(() => {

    document.addEventListener('click', handleCLickToExit);
    return () => document.removeEventListener('click', handleCLickToExit);
  });

  function handleSubmit(e) {

    e.preventDefault();

    try {

      if (errors.length === 0 && isAllFilled) {

        axios.post('http://18.230.148.167:3030/contact-resquest', {
          name,
          email,
          subject,
          message,
        });
        handleRenderEmailSentModal();
      } else {
        return null;
      }
    } catch (error) { /* */ } finally {

      cleanAllFields();
    }
    return null;
  }

  useEffect(() => {

    isAllFilled = (
      name !== ''
      && email !== ''
      && subject !== ''
      && message !== ''
      && errors.length === 0
    );

  }, [name, email, subject, message]);

  return (
    <FormContainer autoComplete="off">
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

      <span className="user-agreement">
        * By clicking submit, you allow the use of your data for future contact.
      </span>

      <Button type="submit" disabled={true} onClick={(e) => handleSubmit(e)}>Submit</Button>
    </FormContainer>
  );
}

Form.propTypes = {

  handleRenderEmailSentModal: PropTypes.func.isRequired,
};

export default Form;
