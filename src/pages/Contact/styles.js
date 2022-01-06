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

  position: relative;

  width: 100%;
  height: 5vw;

  input {
    background: none;
    border: 0;
    color: ${({ theme }) => theme.color.main.fadeTextColor};

    opacity: 0;

    width: 100%;
    height: 100%;
    font-size: 1.4vw;

    padding: 1.6vw .8vw 0;

    transition: opacity .25s ease-in;

    &:focus, &:valid {
      outline: 0;
      opacity: 1;
    }

    &:focus + label span, &:valid + label span {
      transform: translateY(-180%);
      font-size: 1vw;
    }
  }

  label {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100%;

    padding-top: .6vw;
  }

  span {
    position: absolute;
    bottom: .8vw;
    left: .8vw;

    font-size: 1.4vw;

    transition: transform, font-size, .25s ease-in;
  }
`;

export { ContactContainer, FormContainer, InputContainer };
