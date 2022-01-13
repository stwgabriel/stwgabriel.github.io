import styled from 'styled-components';

const Container = styled.div`

  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100vw;
`;

const MainContent = styled.div`

  flex: 1;
`;

const NavigationContainer = styled.div`

  height: fit-content;
  width: 100%;

  z-index: 2000;
`;

export { Container, MainContent, NavigationContainer };
