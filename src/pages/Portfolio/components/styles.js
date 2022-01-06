import styled from 'styled-components';

const PortfolioGroupContainer = styled.div`

  max-width: 100%;

  header#portfolio-group-header {

    margin: 5vh 0 4vh;
    
    h2 {

      font-family: "ProDisplay", -apple-system, BlinkMacSystemFont, Tahoma, Arial Black,Verdana, Helvetica, Montserrat, sans-serif;
      font-weight: 600;
      font-size: 1.6vw;
      font-size: clamp(1.8rem, 1.6vw, 7rem);
    }
  }
`;

const ProjectListContainer = styled.div`

  max-width: 100%;
  display: flex;

  overflow: auto;

  &::-webkit-scrollbar {

    height: 1vw;
  }
`;

const ProjectContainer = styled.div`

  border: .15vw solid ${({ theme }) => theme.color.main.fadeTextColor};
  border-radius: ${({ theme }) => theme.metric.borderRadius};
  box-shadow: ${({ theme }) => theme.effect.containerShadow};
  font-family: 'Montserrat', sans-serif;

  position: relative;

  min-width: 21rem;
  min-height: 20.5rem;
  width: 21vw; 
  width: clamp(21rem, 20.5vw, 90.5rem); 
  height: 20.5vw; 
  height: clamp(20.5rem, 20vw, 90rem); 

  @media (min-width: 1280px) {

    min-width: 27rem;
  }
  @media (min-width: 1500px) {

    min-width: 29rem;
  }
  @media (min-width: 1800px) {

    min-width: 39rem;
  }
  @media (min-width: 2200px) {

    min-width: 42rem;
  }
  @media (min-width: 2400px) {

    min-width: 48rem;
  }

  margin: 0 2vw 1vw 0;

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
    border-top: .15vw solid ${({ theme }) => theme.color.main.fadeTextColor};
    border-radius: ${({ theme }) => theme.metric.borderRadius};

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
      font-weight: 600;
      margin-bottom: .8vw;
    }

    .icon {

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

        img {

          transform: rotateX(0);
        }
      }
    }

    .description {

      width: 100%;
      height: 2.2vw;
      color: ${({ theme }) => theme.color.main.fadeTextColor};

      font-size: .9vw;

      margin-bottom: 1.6vh;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tech-container {

      height: 7.6vw;
    
      overflow: hidden;

      h3 {

        margin-bottom: .8vw;
      }

      .techs {

        display: flex;
        flex-wrap: wrap;

        font-size: .82vw;

      }
    }

    .address-container {

      display: flex;
      justify-content: center;

      a {
        
        background: ${({ theme }) => theme.color.main.selection};
        border-radius: ${({ theme }) => theme.metric.borderRadius};
        box-shadow: ${({ theme }) => theme.effect.elementShadow};
        color: ${({ theme }) => theme.color.main.fadeTextColor};
  
        font-size: 1vw;
        padding: .6vw 1.3vw;
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

    .icon {

      img {

        transform: rotateX(0);
      }
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Tag = styled.span`

  background: ${({ theme }) => theme.color.main.selection};
  border-radius: ${({ theme }) => theme.metric.borderRadius};
  color: ${({ theme }) => theme.color.main.fadeTextColor};

  padding: .5vw .8vw;
  margin: 0 .6vw .69vw 0;
`;

export {
  ProjectContainer, ProjectListContainer, PortfolioGroupContainer, Tag,
};
