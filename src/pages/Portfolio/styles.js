import styled from 'styled-components';

const MainView = styled.div`

  flex: 1;
  width:100%;
`;

const HorizontalScrollView = styled.ul`


  max-width: 100%;
  width: 100%;

  padding: .5rem;
  margin-top: 5rem;

  overflow-x:auto;

  h2 {

    font-size: 2rem;

    margin-bottom: 2rem;
  }
`;

const Project = styled.li`

  background: ${({ theme }) => theme.color.selection};
  border-radius: 1rem;
  outline: solid .2rem #78787E;
  list-style:none;

  height: 27rem;
  width: 30rem;

  position: relative;

  overflow: hidden;


  img {

    flex: 1;

    height: 100%;
  }

  .project__content--overlay {

    background: transparent;

    position: absolute;
    inset:0;

    height: 100%;
    width: 100%;
    overflow: hidden;

    .project__content {

      background: ${({ theme }) => theme.color.background};
      border-radius: 1rem;
      outline: solid .2rem #78787E;

      height: 100%;
      width: 100%;

      padding: 1.5rem;
      margin-top: 60%;

      header {

        display: flex;
      }

      h3 {

        margin-bottom: 1rem;
      }

      .content__description {

        margin-bottom: 2rem;
      }
    }

  }
`;

export { MainView, HorizontalScrollView, Project };
