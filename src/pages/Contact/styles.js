import styled from 'styled-components';

const ContactView = styled.section`

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
      justify-content: center;

      height: 4vw;
      width: 4vw;

      padding: .8vw;


      img {

        width: 80%;

        transition: width .25s ease-in;
      }

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

      &:focus {

        outline: solid .3vw ${({ theme }) => theme.color.main.comment};
      }

      &:hover {

        img {

          width: 70%;
        }
      }
    }
  }

  .alternativeContactFormText {

    font-size: 1.6vw;

    margin: 2vw 0;
  }

  @media (max-width: 999px) {

    max-width: 55rem;
    width: 90vw;

    margin-bottom: 10rem;

    .alternativeContactFormText {

      font-size: 1.9rem;

      margin: 2rem 0 3rem;
    }

    .socials {

      margin-top: 1rem;
    }

    .socials a {

      border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};

      width: 4.4rem;
      height: 4.4rem;

      padding: .8rem;

      &:nth-child(2) {
        margin: 0 1.4rem;
      }
    }
  }

`;

const FormContainer = styled.form`

  width: 100%;

  #error {

    color: ${({ theme }) => theme.color.hot.redBright};

    display: flex;
    align-items: center;

    font-size: 1.1vw;

    margin: -.2vw 0 1vw 1vw;

    #error-spec {

      margin-left: .6vw;
      font-size: .9vw;
    }

    @media (max-width: 999px) {

      font-size: 1.3rem;
      margin-bottom: .8rem;

      #error-spec {

        margin-left: .6rem;
        font-size: 1rem;
      }
    }
  }
`;

const InputContainer = styled.div`

  background: ${({ theme }) => theme.color.main.selection};
  border-radius: ${({ theme }) => theme.metric.borderRadius};

  position: relative;

  width: 100%;

  margin-bottom: 1vw;

  overflow: hidden;

  input, textarea {

    background: none;
    border: 0;
    border-radius: ${({ theme }) => theme.metric.borderRadius};
    color: ${({ theme }) => theme.color.main.fadeTextColor};

    opacity: 0;

    width: 100%;
    height: 100%;
    font-size: 1.4vw;

    padding: 1.6vw .8vw 0;

    transition: opacity .25s ease-in;

    &:focus, &:valid {

      border: solid .25vw ${({ theme }) => theme.color.cold.blue};
      outline: 0;
      opacity: 1;
    }

    &:focus + label span, &:valid + label span {

      transform: translateY(-180%);
      font-size: 1vw;

      @media (max-width: 999px) {
        font-size: 1rem;
      }
    }
  }

  input {

    height: 5vw;

    @media (max-width: 999px) {
      height: 6rem;
    }
  }

  textarea {

    border-radius: ${({ theme }) => theme.metric.borderRadius};
    resize: vertical;
    min-height: 5vw;
    height: 20vw;

    padding-top: 2.8vw;
    overflow: hidden;

    & + label::after {

      content: '';

      background: ${({ theme }) => theme.color.main.selection};
      border-radius: ${({ theme }) => theme.metric.borderRadius};
      display: flex;
      /* width: 100%; */
      height: 2.4vw;

      position: absolute;
      top: .25vw;
      left: .25vw;
      right: .25vw;
    }

    & + label span {

      height: fit-content;
      top: 3vw;

      z-index: 1000;

      @media (max-width: 999px) {

        top: 3rem;
      }
    }

    @media (max-width: 999px) {

      min-height: 4rem;
      height: 16rem;

      padding-top: 2.8rem;
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

    transition: transform, font-size, .25s ease-out;
  }

  &.error {

    outline: .25vw solid ${({ theme }) => theme.color.hot.redBright};
    color: ${({ theme }) => theme.color.hot.redBright};
  }

  @media (max-width: 999px) {

    border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};

    margin-bottom: 1rem;

    &.error {

      outline: .25rem solid ${({ theme }) => theme.color.hot.redBright};
    }

    label {

      padding-top: .6rem;
    }

    input, textarea {

      padding: 1.8rem 1.2rem 0;
      border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};
      font-size: 1.9rem;

      &:focus, &:valid {

        border: solid .3rem ${({ theme }) => theme.color.cold.blue};
      }
    }

    textarea {

      padding-top: 2.5rem;

      & + label::after {

        content: '';

        background: ${({ theme }) => theme.color.main.selection};
        border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};
        height: 1.9rem;

        top: .25rem;
        left: 1rem;
        right: 1rem;
      }
    }

    span {

      bottom: 1.7rem;
      left: 1.5rem;

      font-size: 1.6rem;
    }
  }
`;

export { ContactView, FormContainer, InputContainer };
