import styled, { css } from 'styled-components';

const PageContainer = styled.section`

  ${({ theme }) => css`

    background: ${theme.color.black};
    box-shadow: ${theme.effect.containerShadow};
  `}

  display: flex;
  flex-direction: row;

  max-height: 100vh;
  max-width:100vw;
  width:100%;

  position: relative;

  overflow-x: hidden;
  overflow-y: auto;
`;

export { PageContainer };
