import styled from 'styled-components';

const Overlay = styled.div`

  background: #21222C55;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width:100vw;
  height:100vh;

  z-index:500;
`;

const Container = styled.div`

  background:${({ theme }) => theme.color.main.modalBackground};
  border-radius: ${({ theme }) => theme.metric.borderRadius};
  box-shadow: ${({ theme }) => theme.effect.containerShadow};

  pointer-events: all;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  max-width: 95%;
  width: 40vw;
  width: clamp(45rem, 35vw, 180rem);

  padding: 3.3vw;
  padding: clamp(3.3rem, 2.5vw, 15rem);
  z-index: 550;

  .close-button {

    background: ${({ theme }) => theme.color.main.selection};
    border:none;
    border-radius:  ${({ theme }) => theme.metric.borderRadius};
    box-shadow: ${({ theme }) => theme.effect.itemShadow};

    display: flex;
    align-items: center;
    justify-content: center;

    position:relative;
    top:0;
    right: 0;

    height: 2.5vw;
    width: 2.5vw;
    width: clamp(3.3rem, 3vw, 20rem);
    height: clamp(3.3rem, 3vw, 20rem);

    margin-bottom: 2.5vw;
    margin-bottom: clamp(3.3rem, 2.5vw, 10rem);

    transition: filter .3s ease-in;

    img {

      filter: drop-shadow(${({ theme }) => theme.effect.itemShadow});
      width: 1vw;
      width: clamp(1rem, 1vw, 6rem);

      margin: auto;
    }

    &:hover, &:active {

      filter: brightness(1.4);
    }
  }

  @media (max-width: 999px) {

    border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};
    padding: 3rem 2rem;

    .close-button {

      border-radius:  ${({ theme }) => theme.metric.mobileBorderRadius};

      height: 4.5rem;
      width: 4.5rem;

      img {

        width: 35%;
      }
    }
  }
`;

const DownloadOptions = styled.ul`

  list-style: none;
  width: 100%;
  height: fit-content;
`;

const File = styled.li`

  background: ${({ theme }) => theme.color.main.selection};
  border-radius:  ${({ theme }) => theme.metric.borderRadius};
  box-shadow: ${({ theme }) => theme.effect.itemShadow};

  font-size: 1.2vw;
  font-size:  clamp(1.6rem, 1.2vw, 8rem);

  display: flex;
  align-items:center;
  justify-content: space-between;

  width: 100%;

  padding: .8vw 1.5vw;
  padding: clamp(.8rem, .6vw, 5rem) clamp(1rem, 1.5vw, 5rem);
  margin-bottom: .8vw;
  margin-bottom: clamp(1.2rem, .8vw, 7rem);

  position: relative;
  overflow: hidden;

  img {

    filter: drop-shadow(${({ theme }) => theme.effect.itemShadow});
    width: 1.3vw;
    width: clamp(2rem, 1.3vw, 9rem);
  }

  &:last-of-type {

    margin-bottom: 0;
  }

  .file-header {

    display: flex;
    align-items:center;
    flex:1;

    img {

      margin-right: 2rem;
    }
  }

  .download-button {

    background:transparent;
    border: none;
    border-radius:  ${({ theme }) => theme.metric.borderRadius};

    height: 100%;

    padding: .6vw 1.3vw;
    margin-right: -.4vw;

    transition: background .3s ease-in;

    img {

      pointer-events: none;
    }

    &:hover, &:focus, &:active {

      background:  ${({ theme }) => theme.color.main.reverseAccent};
    }
  }

  @media (max-width:999px) {

    border-radius:  ${({ theme }) => theme.metric.mobileBorderRadius};
    padding: 1.1rem 1.5rem;
    margin-bottom: 1.4rem;

    .download-button {

      border-radius:  ${({ theme }) => theme.metric.mobileBorderRadius};
      padding: .6rem 1.8rem;

      img {

        width: 90%;
      }
    }
  }
`;

const FileSelector = styled.div`

  background: ${({ theme }) => theme.color.main.selection};
  border-radius:  ${({ theme }) => theme.metric.borderRadius};

  display: flex;
  flex-direction:row;
  align-items:center;

  position: absolute;
  right: 0;

  height: 100%;
  width: fit-content;

  overflow: hidden;
  z-index:100;

  .option-link {

    background: transparent;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;

    display: grid;
    place-items: center;

    flex: 1;

    height: 100%;
    min-width:6.5rem;
    width: 6vw;

    transition: background .3s ease-in;
    overflow: hidden;

    &:first-of-type {

      border-radius:  ${({ theme }) => theme.metric.borderRadius} 0 0 ${({ theme }) => theme.metric.borderRadius}  ;
    }
    &:last-of-type {

      border-radius:  0 ${({ theme }) => theme.metric.borderRadius} ${({ theme }) => theme.metric.borderRadius} 0  ;
    }

    &:hover , &:active {

      background:${({ theme }) => theme.color.main.reverseAccent};
    }

    &:focus, &:active {

      background:${({ theme }) => theme.color.main.reverseAccent};
      border: solid .25vw ${({ theme }) => theme.color.cold.blue} ;
      outline: none;
    }
  }

  .divider {

    background:${({ theme }) => theme.color.main.reverseAccent};
    border-radius:  ${({ theme }) => theme.metric.borderRadius};
    opacity: .7;
    width: .2rem;
    height: 35%;
  }

  @media (max-width: 999px) {

    border-radius:  ${({ theme }) => theme.metric.mobileBorderRadius};
    box-shadow: 0 0 1.5rem #0003;

    .option-link {

      width: 8rem;

      &:first-of-type {

        border-radius:  ${({ theme }) => theme.metric.mobileBorderRadius} 0 0 ${({ theme }) => theme.metric.mobileBorderRadius}  ;
      }

      &:last-of-type {

        border-radius:  0 ${({ theme }) => theme.metric.mobileBorderRadius} ${({ theme }) => theme.metric.mobileBorderRadius} 0  ;
      }

      &:focus, &:active {

        border: solid .25rem ${({ theme }) => theme.color.cold.blue} ;
      }
    }
  }
`;

export {
  Overlay,
  Container,
  DownloadOptions,
  File,
  FileSelector,
};
