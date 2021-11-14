import styled from 'styled-components';

const Overlay = styled.div`

  background: #21222C55;
  backdrop-filter: blur(3px);

  display: grid;
  place-items: center;

  position: fixed ;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width:100vw;
  height:100vh;

  z-index:500;

  .click-to-exit {

    background: red;
  }
`;

const Container = styled.div`

  background:${({ theme }) => theme.color.background};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.effect.elementShadow};

  pointer-events: all;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  max-width: 90%;
  width: 45rem;
  width: min(90%, 45rem);

  padding: 3.3rem;
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

    min-width: 3.3rem;
    min-height: 3.3rem;

    margin-bottom:3.3rem;

    transition: background .3s ease-in;

    img {

      filter: drop-shadow(${({ theme }) => theme.effect.itemShadow});
      width:1.2rem;
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
  border-radius: .8rem;
  box-shadow: ${({ theme }) => theme.effect.elementShadow};

  display: flex;
  align-items:center;
  justify-content: space-between;

  width: 100%;

  padding: 1rem 1.5rem;
  margin-bottom: 1.6rem;

  position: relative;
  overflow: hidden;

  img {

    filter: drop-shadow(${({ theme }) => theme.effect.itemShadow});
    width: 1.8rem;
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
    width: 6rem;

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
