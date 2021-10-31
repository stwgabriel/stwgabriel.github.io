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

  .row {

    display: flex;
    height: 80%;

    margin: 0 auto;

    #home-title {

      color: ${({ theme }) => theme.color.fadeWhite};
      font-size: clamp(6rem, 11vw, 25rem);
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

    span {

      margin-right: 1.6rem;
    }

    img {

      width: 1.6rem;
    }
  }
`;

const MeView = styled.section`

`;

export { Content, MainView, MeView };
