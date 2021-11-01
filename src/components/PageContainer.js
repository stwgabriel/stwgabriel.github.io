import styled, { css } from 'styled-components';

import arrow from '../assets/images/icons/arrow.svg';
import leftArrow from '../assets/images/icons/left-arrow.svg';

const PageContainer = styled.section`

  ${({ theme }) => css`

    background: ${theme.color.black};
    box-shadow: ${theme.effect.containerShadow};
  `}

  display: flex;
  flex-direction: row;

  max-height: 100vh;
  max-width:100vw;
  width:100%;

  position: relative;

  overflow-x: hidden;
  overflow-y: auto;

  .page-border {

    font-size: clamp(1.6rem, 1.2vw, 2.5rem);
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: -webkit-sticky;
    position: sticky;
    top:0;

    min-height:100vh;
    height:100vh;
    width: clamp(8rem, 15vh, 20rem);

    padding: 1rem;

    overflow: hidden;
    z-index: 50;

    span {

      color: ${({ theme }) => theme.color.fadeWhite};
      font-size: inherit;
      font-family: inherit;
      margin-top: 7rem;
    }

    img {

      width: 32%;
      max-width: 4.5rem;
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

      width:100%;

      transition: margin .2s ease-out;

      padding-top: 7rem;

      z-index: 5;
    }

    &.from-right {

      border-radius: 1rem 0 0 1rem ;

      right: 0;

      height: 100vh;

      &::after {

        border-radius: 1rem 0 0 1rem ;
        margin-right: -200%;
      }

      &:hover {

          &::after {

            margin-right:0;
        }
      }
    }
    &.from-left {

      border-radius: 0 1rem 1rem 0;

      left: 0;

      height: 100vh;

      .arrow {

        transform: rotate(180deg)
      }

      &::after {

        background: url(${leftArrow}) center no-repeat ${({ theme }) => theme.color.brightBlack};
        background-size: 32%;
        background-position:center calc(50% - 3%);
        border-radius: 0 1rem 1rem 0;

        margin-left: -200% ;
      }

      &:hover {

        &::after {

          margin-left:0;
        }
      }
    }

    &.toPortifolio {

      &::after {
        content: 'Portfolio';
      }
    }
    &.toHome {

      &::after {
        content: 'Home';
      }
    }
    &.toSkills {

      &::after {
        content: 'Skills';
      }
    }
    &.toContact {

      &::after {
        content: 'Contact';
      }
    }
  }
`;

export { PageContainer };
