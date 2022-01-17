import styled from 'styled-components';

const Button = styled.button`

  background: ${({ theme }) => theme.color.cold.blue};
  border-radius: ${({ theme }) => theme.metric.borderRadius};
  color: ${({ theme }) => theme.color.main.white};
  font-size: 1.2vw;
  font-weight: 700;

  width: 100%;
  height: 4.8vw;

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

  @media (max-width: 999px) {

    border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};

    font-size: 1.3rem;

    height: 6rem;

    margin-top: 1rem;
    padding: 1.4rem 0;
  }
`;

export default Button;
