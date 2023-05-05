import styled from 'styled-components'

const AppStyles = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5rem;

  width: 100%;
  min-height: 100vh;
  height: 100%;
  max-width: 95vw;

  padding: 0 0 4rem;
  margin: 0 auto;

  @media (min-width: 144rem) {
    max-width: 144rem;
  }
  @media (max-width: 585px) {
    row-gap: 3rem;

    &::-webkit-scrollbar {
      width: 0!important;
      height: 0!important;
    }
  }
`

export default AppStyles
