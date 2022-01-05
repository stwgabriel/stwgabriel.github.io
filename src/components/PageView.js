import styled from 'styled-components';

const PageView = styled.div`

  flex: 1;

  min-height: 100vh;
  height: fit-content;

  overflow: auto;

  padding: clamp(12rem, 12vh, 20rem) clamp(5rem, 5vw, 10rem);
  margin-right: ${({ marginRight }) => (marginRight ? '10vw' : 0)};
  margin-right: ${({ marginRight }) => (marginRight ? 'clamp(12rem, 10vw, 30rem)' : 0)};
  margin-left: ${({ marginLeft }) => (marginLeft ? '10vw' : 0)};
  margin-left: ${({ marginLeft }) => (marginLeft ? 'clamp(12rem, 10vw, 30rem)' : 0)};

@media (min-width: 280rem) {

  max-width: 300rem;
  margin: 0 auto;
}
`;

export default PageView;
