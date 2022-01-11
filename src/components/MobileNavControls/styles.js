import styled from 'styled-components';

const Container = styled.div`

  background: ${({ theme }) => theme.color.main.reverseAccent};
  border-radius: ${({ theme }) => theme.metric.mobileBorderRadius} ${({ theme }) => theme.metric.mobileBorderRadius} 0 0;
  outline: solid .25rem ${({ theme }) => theme.color.main.selection};

  display: flex;

  height: 9rem;

  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  z-index: 2000;

  &:after {

    content:  '';

    background: ${({ theme }) => theme.color.main.reverseAccent};
    border-top: solid .25rem ${({ theme }) => theme.color.main.selection};
    display: block;

    width: 100%;
    height: 100%;

    position: absolute;
    top: 100%;
  }

  a {

    border-radius: ${({ theme }) => theme.metric.mobileBorderRadius} ${({ theme }) => theme.metric.mobileBorderRadius} 0 0;
    color: inherit;
    cursor: default;
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background .25s ease-in;

    span {

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
      border: solid .3rem ${({ theme }) => theme.color.main.comment};
      outline: 0;
    }
  }

  hr {

    background: ${({ theme }) => theme.color.main.selection};
    border: none;
    border-radius: 1rem;

    margin: auto;

    width: .3rem;
    height: 45%;
  }

  @media (min-width: 1000px) {

    display: none;
  }
`;

export { Container };
