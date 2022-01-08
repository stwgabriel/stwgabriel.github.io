import styled from 'styled-components';

const PageTitle = styled.h2`

  color: transparent;
  font-size: clamp(5rem, 4vw, 20rem);
  font-family: "ProDisplay", -apple-system, BlinkMacSystemFont, Tahoma, Arial Black,Verdana, Helvetica, Montserrat, sans-seif;
  font-weight:800;
  -webkit-text-stroke: .12vw ${({ theme }) => theme.color.main.textColor};
`;

export default PageTitle;
