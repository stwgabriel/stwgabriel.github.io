import styled from 'styled-components';

const PortfolioGroupContainer = styled.div`
  > header {
    margin: 5vh 0 4vh;
    // font-weight: 500;
  }
`;

const ProjectListContainer = styled.div`
  display: flex;
`;

const ProjectContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.color.main.fadeTextColor};
  border-radius: ${({ theme }) => theme.metric.borderRadius};

  width: 25%;
  /* height: 40vh; active later to padronize the height */

  margin-right: 2vw;

  overflow: hidden;

  .main-image {
    position: relative;

    img {
      border-radius: ${({ theme }) => theme.metric.borderRadius};

      width: 100%;
    }
  }

  .overlay {
    background: rgba(0, 0, 0, .5);
    border-radius: ${({ theme }) => theme.metric.borderRadius};

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .info {
    background: ${({ theme }) => theme.color.main.reverseAccent};
    border-top: 1px solid ${({ theme }) => theme.color.main.fadeTextColor};
    border-radius: ${({ theme }) => theme.metric.borderRadius};

    width: 100%;

    padding: 1.2vw;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .icon {
      background: none;
      border: 0;

      transform: rotateX(180deg); // 0 to turn it the other way
      transition: transform .3s;
    }

    .description {
      color: ${({ theme }) => theme.color.main.white};
      opacity: .75;

      margin: .6vh 0 1.6vh;
    }

    .tech-container {
      h3 {
        margin-bottom: .4vw;
      }
      
      .techs {
        display: flex;
        flex-wrap: wrap;
      }
    }


    .see-project-button {
      display: flex;
      justify-content: center;

      button {
        background: ${({ theme }) => theme.color.main.selection};
        border-radius: ${({ theme }) => theme.metric.borderRadius};
        color: ${({ theme }) => theme.color.main.white};
  
        padding: .8vw 1.6vw;
      }
    }

  }
`;

const TechContainer = styled.div`
  background: ${({ theme }) => theme.color.main.selection};
  border-radius: ${({ theme }) => theme.metric.borderRadius};

  padding: .4vw;
  margin: 0 .6vw .6vw 0;
`;

export {
  ProjectContainer, ProjectListContainer, PortfolioGroupContainer, TechContainer,
};
