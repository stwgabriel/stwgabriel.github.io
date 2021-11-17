import styled from 'styled-components';

const PageContainer = styled.section`

  background: ${({ theme }) => theme.color.black};
  box-shadow: ${({ theme }) => theme.effect.containerShadow};

  display: flex;
  flex-direction: row;

  max-height: 100vh;
  min-width: 100vw;
  width: 100vw;
  flex: 1;

  position: relative;

  overflow-x: hidden;
  overflow-y: auto;
`;

export default PageContainer;
