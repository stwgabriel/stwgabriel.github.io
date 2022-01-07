import { useState } from 'react';

import { FormContainer } from '../styles';
import Input from './Input';

function Form() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors] = useState([
    {
      name: 'email',
      message: 'Invalid email',
    },
    {
      name: 'message',
      message: 'This field is empty',
    },
  ]);

  function handleChange(e) {
    const { target } = e;

    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function getError(prop) {
    let message = '';

    errors.forEach((error) => {
      if (error.name === prop) {
        message = error.message;
      }
    });

    return message;
  }

  return (
    <FormContainer onSubmit={(e) => handleSubmit(e)} autoComplete="off">
      <Input
        type="text"
        name="name"
        value={formValues.name}
        handle={(e) => handleChange(e)}
        error={(name) => getError(name)}
      />
      <Input
        type="text"
        name="email"
        value={formValues.email}
        handle={(e) => handleChange(e)}
        error={(name) => getError(name)}
      />
      <Input
        type="text"
        name="subject"
        value={formValues.subject}
        handle={(e) => handleChange(e)}
        error={(name) => getError(name)}
      />
      <Input
        type="text"
        name="message"
        value={formValues.message}
        handle={(e) => handleChange(e)}
        error={(name) => getError(name)}
        textarea
      />
      <button type="submit">Submit</button>
    </FormContainer>
  );
}

export default Form;
