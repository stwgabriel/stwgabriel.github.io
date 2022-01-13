import styled from 'styled-components';

const PageContainer = styled.section`

  background: ${({ theme }) => theme.color.main.background};
  box-shadow: ${({ theme }) => theme.effect.containerShadow};

  display: flex;
  flex-direction: row;

  max-height: 100vh;
  width: 100vw;

  overflow: auto;
  position: relative;
`;

export default PageContainer;
