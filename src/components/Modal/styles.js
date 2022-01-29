import styled from 'styled-components';

const Overlay = styled.div`

  background: #22212C88;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;
`;

const Container = styled.div`

  background: ${({ theme }) => theme.color.main.reverseAccent};
  border-radius: ${({ theme }) => theme.metric.borderRadius};
  box-shadow: ${({ theme }) => theme.effect.containerShadow};

  max-width: 38vw;
  width: 90%;

  padding: 2.5vw 2vw;

  header {

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2vw;

    h2 {

      font-size: 1.8vw;
    }

    #close-button {

      background: ${({ theme }) => theme.color.main.selection};
      border-radius: ${({ theme }) => theme.metric.borderRadius};
      box-shadow: ${({ theme }) => theme.effect.itemShadow} ;

      display: flex;
      align-items: center;
      justify-content: center;

      height: 2.6vw;
      width: 2.6vw;

      transition: filter .25s ease-in;

      img {

        width: 40%;
      }

      &:hover {

        filter: brightness(1.4);
      }
    }
  }

  main {

    margin-bottom: 2.8vw;

    p {

      font-size: 1.2vw;
      line-height: 2.3ch;
      letter-spacing: .1ch;

      margin-bottom: 1vw;
    }
  }

  footer {

    margin: 0 auto;
    width: fit-content;

    a {

      background: ${({ theme }) => theme.color.main.selection};
      border-radius: ${({ theme }) => theme.metric.borderRadius};
      box-shadow: ${({ theme }) => theme.effect.itemShadow};
      color: ${({ theme }) => theme.color.gray.default};
      font-size: 1.2vw;
      font-weight: 600;

      padding: .5vw 1.1vw;
      margin-right: 1vw;

      transition: filter .25s ease-in;

      &:last-child {

        margin: 0;
      }

      &:hover {

        filter: brightness(1.4);
      }
    }
  }

  @media (max-width: 1150px) {

    border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};

    max-width: 55rem;
    width: 95%;

    padding: 2rem;

    header {

      margin-bottom: 2rem;

      h2 {

        font-size: 2.2rem;
      }

      #close-button {

        border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};

        height: 3.8rem;
        width: 3.8rem;
      }
    }

    main {

      margin-bottom: 3rem;

      p {

        letter-spacing: normal;

        font-size: 1.5rem;

        margin-bottom: 1rem;
      }
    }

    footer {


      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;

      width: 100%;

      a {

        border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};

        font-size: 1.3rem;

        padding: .8rem 1.2rem;
        margin: 0 .3rem .4rem 0;
      }
    }
  }

  @media (max-width: 320px) {

    header {

      h2 {

        font-size: 2rem;
      }

      #close-button {

        height: 3rem;
        width: 3rem;
      }
    }

    main {

      p {

        font-size: 1.3rem;
      }
    }

    footer {

      a {

        font-size: 1.3rem;
         padding: .5rem .8rem;
      }
    }
  }

`;

export { Overlay, Container };
