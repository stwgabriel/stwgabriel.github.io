import styled from 'styled-components';

const PageView = styled.div`

  flex: 1;

  padding: clamp(10rem, 10vh, 20rem) clamp(6rem, 3vw, 10rem);
  margin-right: ${({ marginRight }) => (marginRight ? 'clamp(8rem, 8vw, 30rem)' : 0)};
  margin-right: ${({ marginRight }) => (marginRight ? '8vw' : 0)};
  margin-left: ${({ marginLeft }) => (marginLeft ? 'clamp(8rem, 8vw, 30rem)' : 0)};
  margin-left: ${({ marginLeft }) => (marginLeft ? '8vw' : 0)};

@media (min-width: 280rem) {

  max-width: 300rem;
  margin: 0 auto;
}
`;

export default PageView;
