import styled from 'styled-components';

const PageTitle = styled.h2`

  color: transparent;
  font-size: clamp(5rem, 4vw, 16rem);
  font-family: "ProDisplay", -apple-system, BlinkMacSystemFont, Tahoma, Arial Black,Verdana, Helvetica, Montserrat, sans-serif;
  font-weight: 800;
  -webkit-text-stroke: .15vw ${({ theme }) => theme.color.main.textColor};

  margin-bottom: 4vw;
  margin-bottom: clamp(5rem, 4vw, 8rem);

  @media (max-width: 999px) {

    font-size: clamp(4rem, 13vw, 6rem);
    -webkit-text-stroke: .15rem ${({ theme }) => theme.color.main.textColor};
  }
`;

export default PageTitle;
