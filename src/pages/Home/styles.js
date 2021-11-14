import styled from 'styled-components';

const Content = styled.div`

  flex: 1;

  padding: clamp(10rem, 10vh, 20rem) clamp(6rem, 3vw, 10rem);
  margin-left: 8rem;

    @media (min-width:144rem) {

      max-width: 200rem;
      margin:0 auto;
    }
`;

const MainView = styled.section`

  position:relative;

  max-height: 100rem;
  min-height: 38rem;
  height: clamp(38rem, 85vh, 180rem);

  padding-bottom: clamp(100px, 10vh, 10rem);

  .row {

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    margin: 0 auto;

    #home-title {

      color: ${({ theme }) => theme.color.fadeWhite};
      font-size: clamp(4rem, 10vw, 28rem);
      font-weight: bolder;

      align-self: flex-start;
      display:flex;
      flex-direction: column;

      margin-left: -.8%;
    }

    .position {

      color: ${({ theme }) => theme.color.fadeWhite};
      font-size: clamp(1.6rem, 1.5vw, 2.5rem);
      font-style: italic;

      display: flex;
      flex-direction: column;

      align-self: flex-end;
      margin-left: auto;
    }
  }

  .scroll-down {

    background: transparent;
    border: none;
    color: ${({ theme }) => theme.color.fadeWhite};
    font-size: clamp(1.6rem, 1.5vw, 2.5rem);
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 2rem;
    left: -1rem;

    padding: 1rem;

    span {

      margin-right: 1.6rem;
      pointer-events: none;
    }

    img {

      pointer-events: none;
      width: 1.6rem;
    }
  }
`;

const MeView = styled.section`

  padding: clamp(100px, 10vh, 10rem) 0;

  .me-content {

    display: flex;
    flex: 1;
    flex-direction: row;

    margin-top: clamp(3.3rem, 6vh, 10rem);

    .content__text {

      font-size: clamp(1.6rem, 1.5vw, 2.8rem);
      font-size: 600;

      display: flex;
      flex-direction: column;
      justify-content: center;

      padding-right: clamp(5rem, 10vw, 15rem);

      p {

        margin: 1.5rem 0;
      }
    }

    .content__picture {

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      flex:1;

      .download-resume {

        background: rgba(255, 255, 255, 0.15);
        border: none;
        backdrop-filter: blur(4px);
        border-radius: .8rem;
        color: ${({ theme }) => theme.color.white};
        font-size: clamp(1.6rem, 1.2vw, 2.5rem);
        font-weight: 600;

        display: flex;
        align-items:center;
        justify-content: center;

        padding: 1.2rem 2rem;
        margin-top: 3.3rem;

        transition: background .3s;

        span {

          margin-right: 2rem;
        }

        img {

          width: clamp(1.6rem, 1.6vw, 2rem);
        }

        &:hover {

          background: ${({ theme }) => theme.color.brightBlack};
        }
      }

      img {

        width: clamp(20rem, 30vw, 60rem);
      }
    }
  }
`;

export {
  Content, MainView, MeView,
};
