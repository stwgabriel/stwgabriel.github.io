import styled from 'styled-components';

const Container = styled.div`

  position: sticky;
  top: 0;
  bottom: 0;
  ${({ borderSide }) => borderSide}: 0px;

  overflow: hidden;

  .hoverLayer, a {

    font-size: 1.2vw;
    font-size: clamp(1.6rem, 1.2vw, 6rem);
    font-family: 'Montserrat',  sans-serif;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    min-width: 12rem;
    width:  12vw;
    width:  clamp(12rem, 10vw, 30rem);

    padding: 1rem;

    z-index: 100;

    img {

      width: 30%;
    }

    span {

      color: ${({ theme }) => theme.color.gray.bright};
      font-size: inherit;
      font-family: inherit;

      margin-top: 2vw;
    }
  }

  .hoverLayer {

    background: ${({ theme }) => theme.color.cold.blue};
    border-radius: ${({ borderSide }) => (borderSide === 'left' && '0 1.8vw 1.8vw 0')
    || (borderSide === 'right' && '1.8vw 0 0 1.8vw')};
    pointer-events: none;

    position: absolute;
    top:0;
    bottom: 0;
    ${({ borderSide }) => borderSide}: -13vw;

    transition:  ${({ borderSide }) => borderSide} .15s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {

   .hoverLayer {

    ${({ borderSide }) => borderSide}: 0px;
   }
  }
`;

export { Container };
