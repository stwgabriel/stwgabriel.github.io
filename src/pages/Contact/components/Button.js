import styled from 'styled-components';

const Button = styled.button`

  background: ${({ theme }) => theme.color.cold.blue};
  border-radius: ${({ theme }) => theme.metric.borderRadius};
  color: ${({ theme }) => theme.color.main.white};
  font-size: 1.2vw;
  font-weight: 700;

  width: 100%;

  padding: 1.4vw 0;

  margin-top: 1vw;

  transition: background .25s ease-in;

  &:hover {

    background: ${({ theme }) => theme.color.cold.blueBright};
  }

  &:focus {

    background: ${({ theme }) => theme.color.cold.blueBright};
    outline: solid .4vw ${({ theme }) => theme.color.cold.blue};
    outline-offset: .2vw;
  }

  &:disabled {

    background: gray;
    cursor: not-allowed;

    &:focus {

      background: gray;
      outline: 0;
    }
  }
`;

export default Button;
