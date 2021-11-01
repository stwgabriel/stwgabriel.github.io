import styled from 'styled-components';

const PageTitle = styled.h2`

  color: transparent;
  font-size: clamp(6rem, 6vw, 10rem);
  -webkit-text-stroke: .15rem ${({ theme }) => theme.color.white};
`;

export { PageTitle };
