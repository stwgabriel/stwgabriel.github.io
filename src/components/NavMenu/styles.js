import styled from 'styled-components';

const Container = styled.nav`

  margin-bottom: 3vw;
  margin-bottom: max(4.5rem, 3vw);

  ul {

    display: flex;
    align-items: center;
    justify-content: flex-start;

    position :relative;
  }

  li {

    margin-right: 1vw;

    button,
    a {

      background: transparent;
      border-radius: ${({ theme }) => theme.metric.borderRadius};
      color: inherit;
      font-family: 'Montserrat', sans-serif;
      font-size: 1.3vw;
      font-weight: 600;

      padding: .75vw 1.4vw;

      transition: background .25s ease-in;

      &:hover{

        background: ${({ theme }) => theme.color.main.selection};
      }

      &.active {

        background: ${({ theme }) => theme.color.cold.blue};
      }
    }

    #more-options {

      display: none;
      align-items: center;
      justify-content: center;

      width: fit-content;

      span {

        font-family: inherit;
        margin-right: 1vw;
      }

      img {

        width: 1.2vw;
      }
    }

    &.skip-to-content-container {

      margin-right: 0;
    }

    #skip-to-content {

      background: ${({ theme }) => theme.color.main.selection};
      border: none  ;
      box-shadow: 0 0 0 10px ${({ theme }) => theme.color.main.background};

      position: absolute;
      top: -4.6vw;

      margin-right: 0!important;

      outline: solid .25vw ${({ theme }) => theme.color.cold.blue} ;

      transform: translateY(-16vw);
      transition: transform .25s ease-in;

      &:focus {

        transform: translateY(0);
      }
    }
  }
`;

export { Container };
