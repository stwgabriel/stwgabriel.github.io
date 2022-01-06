import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 45vw;

  margin: 3vw auto 0;

  .socials {
    display: flex;

    a {
      border-radius: ${({ theme }) => theme.metric.borderRadius};
      
      display: flex;
      align-items: center;

      padding: .8vw;

      &:first-child {
        background: ${({ theme }) => theme.color.social.linkedin};
      }

      &:nth-child(2) {
        background: ${({ theme }) => theme.color.social.github};
        margin: 0 1.4vw;
      }

      &:last-child {
        background: ${({ theme }) => theme.color.social.instagram};
      }
    }
  }

  > span {
    font-size: 1.2vw;
    
    margin: 2vw 0;
  }
`;

const FormContainer = styled.form`
  width: 100%;
`;

const InputContainer = styled.div`
  background: ${({ theme }) => theme.color.main.selection};
  border-radius: ${({ theme }) => theme.metric.borderRadius};

  width: 100%;
  height: 5vw;

  padding: .8vw;

  cursor: pointer;

  input {
    background: none;
    border: 0;
    color: ${({ theme }) => theme.color.main.fadeTextColor};
    font-size: 1.2vw;

    opacity: 0;

    width: 100%;

    transition: opacity .25s ease-in;

    cursor: pointer;

    &:focus {
      outline: 0;
      opacity: 1;
    }

    &:focus + span {
      transform: translateY(-180%);

      font-size: 1vw;
    }
  }

  label {
    display: flex;
    align-items: flex-end;

    height: 100%;

    position: relative;

    cursor: pointer;
  }

  span {
    position: absolute;
    bottom: 0;

    font-size: 1.6vw;

    transition: all .25s ease-in;
  }
`;

export { ContactContainer, FormContainer, InputContainer };
