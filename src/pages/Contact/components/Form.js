import { FormContainer } from '../styles';
import Input from './Input';

function Form() {

  return (
    <FormContainer autoComplete="off">
      <Input type="text" name="name" label="Name" />
      <Input type="text" name="email" label="Email" />
      <Input type="text" name="subject" label="Subject" />
      <Input type="text" name="message" label="Message" textarea />
      <button type="button">Submit</button>
    </FormContainer>
  );
}

export default Form;
