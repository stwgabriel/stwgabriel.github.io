import styled from 'styled-components';

const SkillsPageView = styled.div`

  display: flex;

  width: 100%;
  min-height: fit-content;

  @media (max-width: 1150px) {

    display: grid;
    grid-gap: 6rem;
    grid-template-areas: 'skills' 'xp';
  }
`;

const SkillsContainer = styled.section`

  grid-area: skills;
  flex: 1;

  height: fit-content;

  padding-right: 2vw;
  margin-top : -2vw;

  h2 {

    font-size: 1.6vw;
    font-weight: 700;

    margin-top: 3vw;
  }

  code {

    background: ${({ theme }) => theme.color.main.selection};
    border-radius: ${({ theme }) => theme.metric.borderRadius};

    padding: .15vw .3vw;
    margin-right: .5vw;

    img {

      background: ${({ theme }) => theme.color.main.background};
      border-radius: ${({ theme }) => theme.metric.borderRadius};

      width: 4vw;

      padding: .1vw;
      margin-top: 1vw;
      pointer-events: all;
    }
  }

  @media (max-width: 1150px) {

    margin-top : -3rem;

    h2 {

      font-size: 2.4rem;

      margin-top: 3rem;
    }

    code {

      border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};

      padding: .15rem .3rem;
      margin-right: .8rem;

      img {

        border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};

        width: 5.8rem;

        padding: .3rem;
        margin-top: 2rem;
      }
    }
  }
`;

const XpContainer = styled.section`

  font-size: 1.5vw;
  font-size: clamp(1.8rem, 1.5vw, 6.5rem);

  grid-area: xp;
  flex: 1;

  height: fit-content;

  margin-top: 1vw;

  h2 {

    font-size: 1.6vw;
    font-weight: 700;

    margin-bottom: .8vw;
  }

  p {

    font-size: 1.9rem;
    font-size: clamp(1.9rem, 1.3vw, 6.5rem);
    font-weight: 500;
    line-height: 2.3ch;
    margin: 1vw 0;
  }

  @media (max-width: 1150px) {

    h2 {

      font-size: 2.4rem;

      margin-bottom: 2rem;
    }

  }
`;

export { SkillsPageView, SkillsContainer, XpContainer };
