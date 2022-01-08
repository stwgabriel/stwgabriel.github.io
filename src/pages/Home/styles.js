import styled from 'styled-components';

const MainView = styled.section`

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-height: 80rem;
  height: clamp(38rem, 85vh, 250rem);
  min-height: 30rem;

  position:relative;

  @media (min-width: 1400px) {

    min-height: 45rem;
  }
  @media (min-width: 1800px) {

    min-height: 60rem;
    max-height: 200rem;
  }
  @media (min-width: 2500px) {

    min-height: 80rem;
  }

  padding-bottom: 12vh;
  padding-bottom: clamp(10rem, 12vh, 30rem);

  h1#home-title {

    color: ${({ theme }) => theme.color.main.fadeTextColor};
    font-size: 10vw;
    font-size: clamp(4rem, 10vw, 40rem);
    font-family: "ProDisplay", -apple-system, BlinkMacSystemFont, Tahoma, Arial Black,Verdana, Helvetica, Montserrat, sans-seif;
    letter-spacing: small;
    line-height: 1.6ch;
    font-weight: 800;

    align-self: flex-start;
    display:flex;
    flex-direction: column;

    margin-left: -.8%;

    @media (min-width: 2300px) {

      font-size: 10vw;
      font-size: clamp(25rem, 11vw, 40rem);
    }

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

      font-size: 1.5vw;
      font-size: clamp(1.6rem, 1.5vw, 6.5rem);

      display: flex;
      flex-direction: column;
      justify-content: center;

      padding-right: 10vw;
      padding-right: clamp(5rem, 10vw, 15rem);

      p {

        margin: 1.1vw 0;
      }
    }

    .content__picture {

      display: flex;
      flex:1;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      .download-resume {

        background: ${({ theme }) => theme.color.main.selection};
        backdrop-filter: blur(4px);
        border: none;
        border-radius: ${({ theme }) => theme.metric.borderRadius};
        color: ${({ theme }) => theme.color.main.textColor};
        font-size: 1.4vw;
        font-size: clamp(1.6rem, 1.4vw, 2.5rem);

        display: flex;
        align-items:center;
        justify-content: center;

        padding: 1.8rem 1.4rem;
        padding: 1vw 2vw;
        margin-top: 2vw;
        margin-top: clamp(3rem, 2vw, 6rem);

        transition: background .3s;

        @media (min-width: 2300px) {

          font-size: 1.4vw;
          font-size: clamp(1.6rem, 1.4vw, 5rem);
        }

        span {

          margin-right: 1vw;
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

        width: clamp(20rem, 30vw, 130rem);
      }
    }
  }
`;

export { MainView, AboutView };
