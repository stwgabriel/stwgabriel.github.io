import styled from 'styled-components';

import arrow from '../../assets/images/icons/arrow.svg';
import leftArrow from '../../assets/images/icons/left-arrow.svg';

const Container = styled.div`

  position: sticky;
  top:0;

  overflow: hidden;

  a {

    font-size: 1.2vw;
    font-size: clamp(1.6rem, 1.2vw, 6rem);
    font-family: 'Montserrat',  sans-serif;
    font-weight: 400;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
    height: 100vh;
    min-width: 8rem;
    width:  8vw;
    width: clamp(8rem, 8vw, 30rem);

    padding: 1rem;

    z-index: 100;

    span {

      color: ${({ theme }) => theme.color.fadeWhite};
      font-size: inherit;
      font-family: inherit;
      margin-top: 4vw;
    }

    img {

      width: 32%;
      position: absolute;
      top: calc(50% - 5%);
    }

    &::after {

      content: '';

      background: url(${arrow}) center no-repeat ${({ theme }) => theme.color.brightBlack};
      background-size: 32%;
      background-position:center calc(50% - 3%);
      color: ${({ theme }) => theme.color.fadeWhite};

      display: flex;
      align-items: center;
      justify-content:center;

      position: absolute;
      top: 0;
      bottom: 0;

      width: 8rem;
      width:100%;

      transition: margin .2s ease-in;

      padding-top: 4vw;

      z-index: 5;
    }

    &.from-right {

      right: 0;
      height: 100vh;

      &::after {

        border-radius: 1vw 0 0 1vw;
        margin-right: -200%;
      }

      &:hover {

          &::after {

            margin-right:0;
        }
      }
    }
    &.from-left {

      left: 0;
      height: 100vh;

      .arrow {

        transform: rotate(180deg)
      }

      &::after {

        background: url(${leftArrow}) center no-repeat ${({ theme }) => theme.color.brightBlack};
        background-size: 32%;
        background-position:center calc(50% - 3%);
        border-radius: 0 1vw 1vw 0;

        margin-left: -200% ;
      }

      &:hover {

        &::after {

          margin-left:0;
        }
      }
    }

    &.to-portfolio {

      &::after {
        content: 'Portfolio';
      }
    }
    &.to-home {

      &::after {
        content: 'Home';
      }
    }
    &.to-skills {

      &::after {
        content: 'Skills';
      }
    }
    &.to-contact {

      &::after {
        content: 'Contact';
      }
    }
  }
`;

export { Container };
