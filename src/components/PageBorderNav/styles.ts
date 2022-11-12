import styled from 'styled-components'

const Container = styled.div<{ borderSide: string }>`
  position: sticky;
  top: 0;
  bottom: 0;
  ${({ borderSide }) => borderSide}: 0px;

   width: 12rem;
  height: 100vh;

  overflow: hidden;

  .hoverLayer,
  a {
    font-size: 1.2vw;
    font-size: clamp(1.6rem, 1.2vw, 6rem);
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    min-width: 12rem;
    width: 12vw;
    width: clamp(12rem, 10vw, 30rem);

    padding: 1rem;

    z-index: 100;

    &:focus {
      border: solid 0.25vw ${({ theme }) => theme.color.main.comment};
      outline: none;

      & ~ .hoverLayer {
        ${({ borderSide }) => borderSide}: 0;
      }
    }

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
    position: absolute;
    top: 0;
    bottom: 0;
    ${({ borderSide }) => borderSide}: -13vw;

    transition: ${({ borderSide }) => borderSide} 0.15s
      cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    .hoverLayer {
      ${({ borderSide }) => borderSide}: 0px;
    }
  }

  @media (max-width: 999px) {
    display: none;
  }
`

export { Container }
