import styled from 'styled-components';

const PortfolioContainer = styled.section`

  flex: 1;

  min-height: 100vh;

  overflow: auto;
`;

const PortfolioGroupContainer = styled.div`

  max-width: 100%;

  margin-bottom: 4vw;

  &:last-child {

    margin-bottom: 0;
  }

  header#portfolio-group-header {

    margin-bottom: 3.6vw;

    h2 {

      font-size: 1.6vw;
      font-size: clamp(1.9rem, 1.6vw, 7rem);
      font-weight: 700;
    }
  }

  @media (max-width: 999px) {

    margin-bottom: 4rem;

    header#portfolio-group-header {

      margin: 1.2rem 0 2rem;

      h2 {

        font-size: 2.4rem;
      }
    }
  }
`;

const ProjectListContainer = styled.div`

  max-width: 100%;
  display: flex;

  overflow: auto;

  &::-webkit-scrollbar {

    height: 1.4vw;

    @media (max-width: 999px) {

      height: 1.4rem;
    }
  }
`;

const ProjectContainer = styled.div`

  border: .15vw solid ${({ theme }) => theme.color.gray.default};
  border-radius: ${({ theme }) => theme.metric.borderRadius};
  box-shadow: ${({ theme }) => theme.effect.containerShadow};

  flex: none;

  position: relative;

  min-width: 21rem;
  min-height: 20.5rem;
  width: 21vw;
  width: clamp(21rem, 20.5vw, 90.5rem);
  height: 20.5vw;
  height: clamp(20.5rem, 20vw, 90rem);

  margin: 1vw 2vw 1vw 1vw;

  overflow: hidden;

  .main-image {

    width: 100%;
    height: 100%;
    position: relative;

    img {

      border-radius: ${({ theme }) => theme.metric.borderRadius};

      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .overlay {

    background: #00000000;
    border-radius: ${({ theme }) => theme.metric.borderRadius};

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    transition: background .25s ease-in;
  }

  .info {

    background: ${({ theme }) => theme.color.main.reverseAccent};
    border-radius: ${({ theme }) => theme.metric.borderRadius};
    box-shadow: 0 0 0 .15vw  ${({ theme }) => theme.color.gray.default};


    position: absolute;
    top: 100%;
    left: 0;
    transform: translateY(-35%);

    width: 100%;
    height: 100%;

    padding: 1.2vw;
    margin-top: -.15vw;

    transition: transform .25s ease-in;

    header {

      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    h3 {

      font-size: 1.2vw;
      font-family: -apple-system,"ProText", BlinkMacSystemFont, Helvetica, Tahoma, Arial Black,Verdana, Montserrat, sans-serif;
      font-weight: 600;
      margin-bottom: .8vw;

      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .expand-close-button {

      background: none;
      border: 0;
      border-radius: ${({ theme }) => theme.metric.borderRadius};

      display: flex;

      padding: .8vw 1vw;
      margin: -.5vw 0 .5vw;

      transition: background .25s ease-in;

      img {

        width: 1.6vw;
        transform: rotateX(180deg); // 0 to turn it the other way
        transition: transform .25s ease-in;
        margin: auto;
      }

      &:hover, &:focus {

        background: ${({ theme }) => theme.color.main.selection};
      }
      &:focus {

        img {

          transform: rotateX(0);
        }
      }
    }

    .description {

      width: 100%;
      height: 2.2vw;
      color: ${({ theme }) => theme.color.main.fadeTextColor};
      font-family: -apple-system,"ProText", BlinkMacSystemFont, Helvetica, Tahoma, Arial Black,Verdana, Montserrat, sans-serif;
      font-size: 1vw;
      font-weight: 600;

      margin-bottom: 1vw;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tags-container {

      height: 7.6vw;

      overflow: hidden;

      h3 {

        margin-bottom: .8vw;
      }

      .tags {

        font-size: .93vw;
        display: flex;
        flex-wrap: wrap;

        span {

          font-family: -apple-system, "ProText", BlinkMacSystemFont, Helvetica, Tahoma, Arial Black,Verdana, Montserrat, sans-serif;
        }
      }
    }

    .see-project-button-container {

      display: flex;
      justify-content: center;

      .see-project-button {

        background: ${({ theme }) => theme.color.main.selection};
        border-radius: ${({ theme }) => theme.metric.borderRadius};
        box-shadow: ${({ theme }) => theme.effect.containerShadow};
        color: ${({ theme }) => theme.color.main.fadeTextColor};
        font-family: -apple-system, "ProText", BlinkMacSystemFont, Helvetica, Tahoma, Arial Black, Verdana, Montserrat, sans-serif;
        font-size: .82vw;
        padding: .6vw 1.3vw;
        margin-top: .2vw;

        transition: background .25s ease-in;

        &:hover {

          background: ${({ theme }) => theme.color.cold.blue};
        }
      }
    }
  }

  &.open {

    .info {

      transform: translateY(-90%);
    }

    .overlay {

      background: #00000055;
    }

    .expand-close-button {

      img {

        transform: rotateX(0);
      }
    }
  }

  @media (max-width: 1150px) {

    border: .15rem solid ${({ theme }) => theme.color.gray.default};
    border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};
    width: 29rem;
    height: 27.5rem;

    margin: 1rem 2rem 1rem 1rem;

    .main-image {

      img {
        border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};
      }
    }

    .info {

      border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};
      box-shadow: 0 0 0 .15rem ${({ theme }) => theme.color.gray.default};
      padding: 1.4rem;

      h3 {

        font-size: 1.8rem;
        margin-bottom: 1.5rem;
      }

      .description {

        height: 3rem;
        font-size: 1.3rem;

        margin: .1rem 0 1.2rem 0;
      }

      .expand-close-button {

        border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};

        padding: 1.1rem 1.5rem;

        img {

          width: 2rem;
        }
      }

      .tags-container {

        height: 10rem;

        h3 {

          margin-bottom: 1.1rem;
        }

        .tags {

          font-size: 1.3rem;
        }
      }

      .see-project-button-container {

        .see-project-button {

          border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};
          font-size: 1.4rem;

          padding: 1rem 1.8rem;
          margin-top: .7rem;
        }
      }
    }

    &.open {

      .info {

        transform: translateY(-94%);
      }
    }
  }

  @media (max-width: 390px) {

    width: 21.5rem;
    height: 21rem;

    margin: 1rem;

    .info {

      padding: 1.1rem;

      h3 {

        font-size: 1.4rem;
        margin-bottom: 1rem;
      }

      .description {

        font-size: 1.1rem;

        margin-bottom: .8rem;
      }

      .tags-container {

        height: 8rem;

        .tags {
          font-size: 1.1rem;
        }
      }

      .expand-close-button {

        padding: .6rem .8rem;

        img {

          width: 1.6rem;
        }
      }

      .see-project-button-container {

        .see-project-button {

          font-size: 1.2rem;

          padding: .6rem 1rem;
        }
      }
    }
  }
`;

const Tag = styled.span`

  background: ${({ theme }) => theme.color.main.selection};
  border-radius: ${({ theme }) => theme.metric.borderRadius};
  box-shadow: ${({ theme }) => theme.effect.itemShadow};
  color: ${({ theme }) => theme.color.main.fadeTextColor};

  padding: .5vw .8vw;
  margin: 0 .6vw .69vw 0;

  @media (max-width: 999px) {
    border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};

    padding: .5rem .8rem;
    margin: 0 .6rem .7rem 0;
  }

  @media (max-width: 340px) {
    padding: .4rem .6rem;
  }
`;

export {
  PortfolioContainer, ProjectContainer, ProjectListContainer, PortfolioGroupContainer, Tag,
};
