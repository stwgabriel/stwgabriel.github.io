import styled from 'styled-components';

const Underlayer = styled.div`

  background: ${({ theme }) => theme.color.main.background};

  position: fixed;
  bottom: -9rem;
  left: 0;

  height: 19rem;
  width: 100%;

  z-index: -1;


  @media (min-width: 1000px) {

    display: none;
  }
`;

const Container = styled.div`

  background: ${({ theme }) => theme.color.main.reverseAccent};
  border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};
  border: solid .25rem ${({ theme }) => theme.color.main.selection};

  display: flex;
  pointer-events: all;

  height: 9rem;
  width: 100%;
  max-width: 95vw;

  margin: 0 auto 1rem;

  z-index: 2000;

  &:after {

    content:  '';

    background: ${({ theme }) => theme.color.main.background};
    display: block;

    width: 100%;
    height: 200%;

    position: absolute;
    top: 100%;
    left: -.5rem;
    right: -.5rem;
  }

  a {

    border-radius:${({ theme }) => theme.metric.mobileBorderRadius};
    color: inherit;
    cursor: default;
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background .25s ease-in;

    span {

      font-family: 'Montserrat', sans-serif;
      font-size: 1.7rem;
    }

    &.onRight {

      span {

        margin-right: 1rem;
      }
    }

    &.onLeft {

      span {

        margin-left: 1rem;
      }
    }

    img {

      width: 2.3rem;
    }

    &:active,
    &:focus {

      background: ${({ theme }) => theme.color.cold.blue};
      outline: solid .3rem ${({ theme }) => theme.color.cold.blue};
      /* outline: 0; */
    }
  }

  hr {

    background: ${({ theme }) => theme.color.main.selection};
    border: none;
    border-radius: 1rem;

    margin: auto .25rem;

    width: .3rem;
    height: 45%;
  }

  @media (min-width: 1000px) {

    display: none;
  }
`;

export { Container, Underlayer };
