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

      height: 3.5vw;
      width: 3.5vw;

      padding: .5vw;
      margin-right: 1vw;

      &:last-child {

        margin: 0;
      }

      img {

        filter: drop-shadow(0 0 .2vw #0003);

        width: 80%;

        transition: width .25s ease-in;
      }

      &.LinkedIn {

        background: ${({ theme }) => theme.color.social.linkedin};
      }

      &.Github {

        background: ${({ theme }) => theme.color.social.github};
      }

      &.Instagram {

        background: ${({ theme }) => theme.color.social.instagram};
      }

      &.Link-Free {

        background: ${({ theme }) => theme.color.main.selection};
      }

      &:focus {

        box-shadow: 0 0 0 .3vw ${({ theme }) => theme.color.main.comment};
      }

      &:hover {

        img {

          width: 70%;
        }
      }
    }
  }

  .alternativeContactFormText {

    font-size: 1.8vw;
    font-weight: 600;

    margin: 2vw 0;
  }

  .user-agreement {

    color: ${({ theme }) => theme.color.main.comment};
    font-size: 1.3vw;

    display: inline-block;
    margin-bottom: 1vw;
  }

  @media (max-width: 999px) {

    max-width: 55rem;
    width: 90vw;

    .alternativeContactFormText {

      font-size: 1.9rem;

      margin: 2rem 0 3rem;
    }

    .socials {

      margin-top: 1rem;

      a {

        border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};

        width: 4.4rem;
        height: 4.4rem;

        padding: .8rem;
        margin-right: 1.4rem ;

        img {

          filter: drop-shadow(0 0 .2rem #0003);

        }

        &:last-child {

          margin: 0;
        }
      }
    }

    .user-agreement {

      font-size: 1.4rem ;
      margin-bottom: 1rem;
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
    font-weight: 700;

    margin: -.2vw 0 1vw 1vw;

    #error-spec {

      font-size: .9vw;

      margin-left: .6vw;
    }
  }

  @media (max-width: 999px) {

    #error {

      font-size: 1.3rem;
      font-weight: 500;

      margin-bottom: .8rem;

      #error-spec {

        margin-left: .6rem;
        font-size: 1.1rem;
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

  label {

    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }

  span {

    font-size: 1.4vw;
    font-weight: 700;

    position: absolute;
    top: 0vw;
    left: 1vw;

    transform: translateY(150%);

    transition: transform, font-size, .25s;
    z-index: 500;
  }

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
      opacity: 1;
    }

    &:focus + label span, &:valid + label span {

      transform: translateY(1rem);
      font-size: 1.1vw;
    }
  }

  input {

    height: 5vw;
  }

  textarea {

    border-radius: ${({ theme }) => theme.metric.borderRadius};
    resize: vertical;
    min-height: 5vw;
    height: 16vw;

    overflow: hidden;

    padding-top: 2vw;

    & + label::after {

      content: '';

      background: ${({ theme }) => theme.color.main.selection};
      border-radius: ${({ theme }) => theme.metric.borderRadius};

      display: flex;

      height: 1.8vw;

      position: absolute;
      top: .20vw;
      left: .20vw;
      right: .20vw;
    }

    @media (max-width: 999px) {

      min-height: 4rem;
      height: 16rem;

      padding-top: 2.8rem;
    }
  }

  &.error {

    box-shadow:  0 0 0 .25vw ${({ theme }) => theme.color.hot.redBright};
    color: ${({ theme }) => theme.color.hot.redBright};
  }

  @media (max-width: 1150px) {

    border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};

    margin-bottom: 1rem;

    &.error {

      box-shadow:  0 0 0 .25rem ${({ theme }) => theme.color.hot.redBright};
    }

    span {

      font-size: 1.8rem;

      top: 0;
      left: 1.5rem;
    }

    input, textarea {

      padding: 2.5rem 1.2rem 0;
      border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};
      font-size: 1.9rem;

      &:focus, &:valid {

        border: solid .3rem ${({ theme }) => theme.color.cold.blue};
      }

      &:focus + label span, &:valid + label span {

        font-size: 1.6rem;
      }
    }

    input {

      height: 6.5rem;
    }

    textarea {

      padding-top: 3rem;

      & + label::after {

        content: '';

        background: ${({ theme }) => theme.color.main.selection};
        border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};
        height: 3rem;

        top: .25rem;
        left: 1rem;
        right: 1rem;
      }
    }
  }
`;

export { ContactView, FormContainer, InputContainer };
