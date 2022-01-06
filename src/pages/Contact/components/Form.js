import { FormContainer } from '../styles';
import Input from './Input';

function Form() {

  return (
    <FormContainer autoComplete="off">
      <Input type="text" name="nome" label="Nome" />
    </FormContainer>
  );
}

export default Form;
