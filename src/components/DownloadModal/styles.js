import styled from 'styled-components';

const Overlay = styled.div`

  background: #21222C55;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  display: grid;
  place-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width:100vw;
  height:100vh;

  z-index:500;

  &:before {

    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    width:100vw;
    height:100vh;

    filter: blur(3px);
  }

  .click-to-exit {

    background: red;
  }
`;

const Container = styled.div`

  background:${({ theme }) => theme.color.background};
  border-radius: 1vw;
  box-shadow: ${({ theme }) => theme.effect.elementShadow};

  pointer-events: all;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  max-width: 90%;
  width: 45vw;
  width: clamp(45rem, 45vw, 180rem);

  padding: 3.3vw;
  padding: clamp(3.3rem, 3.3vw, 15rem);
  z-index: 550;

  .close-button {

    background: ${({ theme }) => theme.color.selection};
    border:none;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.effect.elementShadow};

    display: grid;
    place-items:center;

    position:relative;
    top:0;
    right: 0;

    height: 3vw;
    width: 3vw;
    width: clamp(3.3rem, 3vw, 20rem);
    height: clamp(3.3rem, 3vw, 20rem);

    margin-bottom: 3vw;
    margin-bottom: clamp(3.3rem, 3vw, 10rem);

    transition: background .3s ease-in;

    img {

      filter: drop-shadow(${({ theme }) => theme.effect.itemShadow});
      width: 1vw;
      width: clamp(1rem, 1vw, 6rem);
    }

    &:hover {

      background: #fff5;
    }
  }
`;

const DownloadOptions = styled.ul`

  list-style: none;
  width: 100%;
  height: fit-content;
`;

const File = styled.li`

  background: ${({ theme }) => theme.color.selection};
  border-radius: .8vw;
  box-shadow: ${({ theme }) => theme.effect.elementShadow};

  font-size: 1.4vw;
  font-size:  clamp(1.6rem, 1.4vw, 8rem);

  display: flex;
  align-items:center;
  justify-content: space-between;

  width: 100%;

  padding: 1.2vw 1.5vw;
  padding: clamp(1rem, 1.2vw, 5rem) clamp(1.5rem, 1.5vw, 8rem);
  margin-bottom: clamp(1.6rem, 1.5vw, 7rem);

  position: relative;
  overflow: hidden;

  img {

    filter: drop-shadow(${({ theme }) => theme.effect.itemShadow});
    width: 1.6vw;
    width: clamp(1.2rem, 1.6vw, 9rem);
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
    border-radius: .5rem;

    height: 100%;

    padding: .5rem 1rem;

    transition: background .3s ease-in;

    img {

      pointer-events: none;
    }

    &:hover {

      background:  #0005;
    }
  }
`;

const FileSelector = styled.div`

  background: ${({ theme }) => theme.color.selection};
  border-radius: .8rem;

  display: flex;
  flex-direction:row;
  align-items:center;

  position: absolute;
  right: 0;

  height: 100%;
  width:fit-content;

  overflow: hidden;
  z-index:100;

  .option-link {

    background: transparent;
    border: none;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;

    display: grid;
    place-items: center;

    flex: 1;

    height: 100%;
    width: 6vw;

    transition: background .3s ease-in;

    &:hover {

      background: #0005;
    }
  }

  .divider {

    background:${({ theme }) => theme.color.black};
    border-radius: 1rem;
    opacity: .7;
    width: .2rem;
    height: 35%;
  }
`;

export {
  Overlay,
  Container,
  DownloadOptions,
  File,
  FileSelector,
};
