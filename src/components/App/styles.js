import styled, { css } from 'styled-components';

const Container = styled.div`

  ${() => css`

    display: flex;
    min-height: 100vh;
    width: 100%;
  `}
`;

export { Container };
