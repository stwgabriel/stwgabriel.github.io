import styled from 'styled-components';

const MainView = styled.section`

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-height: 80rem;
  height: clamp(38rem, 80vh, 250rem);
  min-height: 30rem;

  position:relative;

  padding: 5rem 0 9rem;
  padding: clamp(4rem, 6vh, 30rem) 0 clamp(5rem, 12vh, 30rem);

  h1#home-title {

    color: ${({ theme }) => theme.color.main.fadeTextColor};
    font-size: 13rem;
    font-size: clamp (13rem, 15vw, 40rem);
    letter-spacing: small;
    line-height: 1.6ch;
    font-weight: 800;

    align-self: flex-start;
    display:flex;
    flex-direction: column;

    margin: 0 0 2rem -.8%;

    span {

      font-family: inherit;
    }
  }

  .bottom-row {

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .position {

    color: ${({ theme }) => theme.color.main.fadeTextColor};
    font-size: 1.5vw;
    font-size: clamp(1.6rem, 1.5vw, 5rem);
    font-family: "ProDisplay", -apple-system, BlinkMacSystemFont, Tahoma, Arial Black,Verdana, Helvetica, Montserrat, sans-seif;
    font-style: italic;
    font-weight: 600;

    display: flex;
    flex-direction: column;

    margin-left: -.8%;

    @media (max-width: 999px) {

      display: none;
    }
  }

  .scroll-down {

    background: transparent;
    border-radius: ${({ theme }) => theme.metric.borderRadius};
    color: ${({ theme }) => theme.color.main.fadeTextColor};
    font-size: 1.3vw;
    font-size: clamp(1.6rem, 1.3vw, 5rem);
    font-family: 'Montserrat',  sans-serif;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    margin-bottom: -1vw;

    span {

      margin-right: 1.6vw;
      pointer-events: none;
    }

    img {

      pointer-events: none;
      width: 1.2vw;
      width: clamp(1rem, .9vw, 4rem);
    }
  }

  @media (max-width: 999px) {

    padding: 10rem 0;
    padding: clamp(5rem, 12vh, 30rem) 0;

    h1#home-title {

      font-size: min(22vw, 12rem);
      font-size: clamp(7.5rem, 24vw, 13rem);
    }

    .scroll-down {

      border:0;
      outline: 0;
    }
  }

  @media (min-width: 1400px) {

    min-height: 45rem;
  }
  @media (min-width: 1800px) {

    min-height: 60rem;
    max-height: 200rem;
  }
  @media (min-width: 2300px) {

    h1#home-title {

      font-size: clamp(25rem, 11vw, 40rem);
    }
  }
  @media (min-width: 2500px) {

    min-height: 80rem;
  }
`;

const AboutView = styled.section`

  padding: clamp(12rem, 10vh, 30rem) 0 0;

  .me-content {

    display: flex;
    flex: 1;
    flex-direction: row;

    margin-top: 6vh;
    margin-top: clamp(3.3rem, 6vh, 10rem);

    .content__text {

      font-size: 2rem;
      font-size: clamp(2rem, 1.25vw, 6.5rem);
      font-weight: 500;

      display: flex;
      flex-direction: column;
      justify-content: center;
      grid-area: meText;

      padding-right: 10vw;
      padding-right: clamp(5rem, 10vw, 80rem);

      p {

        line-height: 2.3ch;
        margin: 1vw 0;
      }
    }

    .content__picture {

      display: flex;
      flex:1;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      grid-area: meImage;

      .download-resume {

        background: ${({ theme }) => theme.color.main.selection};
        backdrop-filter: blur(4px);
        border: none;
        border-radius: ${({ theme }) => theme.metric.borderRadius};

        color: ${({ theme }) => theme.color.main.textColor};
        font-size: 1.4vw;
        font-size: clamp(1.6rem, 1.4vw, 5rem);

        display: flex;
        align-items:center;
        justify-content: center;

        padding: 1.6vw 2vw;
        padding: clamp(1.6rem, 1vw, 4rem) clamp(2.4rem, 2vw, 8rem);
        margin-top: 2vw;
        margin-top: clamp(3rem, 2vw, 6rem);

        transition: background .3s;

        span {

          margin-right: 2vw;
        }

        img {

          width: 1.2vw;
          width: clamp(1.6rem, 1.2vw, 5rem);
        }

        &:hover {

          background: ${({ theme }) => theme.color.cold.blue};
        }
      }

      img {

        width: clamp(20rem, 30vw, 140rem);
      }
    }
  }

  @media(max-width: 1150px) {

    .me-content {

      display: grid;
      grid-template-areas:
      'meImage'
      'meText';

      .content__picture {

        .download-resume {

          border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};

          padding: 1.6vw 2vw;
          padding: clamp(1.8rem, 1vw, 4rem) clamp(3rem, 2vw, 8rem);
          margin-bottom: 5rem;
        }
      }

      .content__text {

        padding-right: 5vw;
        padding-right: clamp(4rem, 5vw, 15rem);

        p {

          margin: 1.4rem 0;
        }
      }
    }
  }
  @media (max-width:595px) {

    .me-content {

      .content__text {

        padding-right: 0;
      }
    }
  }
  @media (max-width: 300px) {

    .content__text {

      font-size: clamp(1.6rem, 1.5vw, 6.5rem);
    }
  }
`;

export { MainView, AboutView };
