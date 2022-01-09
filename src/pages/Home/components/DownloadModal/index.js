/* eslint-disable indent */
import { useEffect, useState } from 'react';
import reactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import clickToExit from '../../../../utils/clickToExit';

import {
  Overlay, Container, DownloadOptions, File, FileSelector,
} from './styles';

import close from '../../../../assets/images/icons/close.svg';
import downloadIcon from '../../../../assets/images/icons/download-arrow.svg';
import docIcon from '../../../../assets/images/icons/document.svg';

function DownloadModal({ handleRenderDownloadModal, renderDownloadModal }) {

  if (!renderDownloadModal) { return null; }

  const [portugueseOption, setPortugueseOption] = useState(false);
  const [englishOption, setEnglishOption] = useState(false);

  function handleClick(element) {

    const { target } = element;

    if (clickToExit(target, 'click-to-exit')) {

      (handleRenderDownloadModal())();
    }
    if (target.classList.contains('pt-br')) { setPortugueseOption(!portugueseOption); }
    if (target.classList.contains('en-us')) { setEnglishOption(!englishOption); }
  }

  useEffect(() => {

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  });

  const
    [
      enDocx,
      enPdf,
      ptDocx,
      ptPdf,
    ] = [

        '/resume/stwGabriel_English-US.docx',
        '/resume/stwGabriel_English-US.pdf',
        '/resume/stwGabriel_Portugues-BR.docx',
        '/resume/stwGabriel_Portugues-BR.pdf',
      ];

  return reactDOM.createPortal(

    <Overlay className="no-select click-to-exit">
      <Container className="download-modal">

        <button
          onClick={handleRenderDownloadModal()}
          type="button"
          className="close-button"
        >
          <img src={close} alt="close" />
        </button>

        <DownloadOptions>

          <File>

            <header className="file-header">
              <img src={docIcon} alt="document" />
              <span>English-US</span>
            </header>

            <button
              type="button"
              className="download-button en-us"
            >
              <img src={downloadIcon} alt="download" />
            </button>

            {englishOption && (
              <FileSelector>
                <Link
                  to={enDocx}
                  className="option-link en-us"
                  target="_blank"
                  download="stwGabriel_English-US.docx"
                >
                  .docx
                </Link>
                <div className="divider" />
                <Link
                  to={enPdf}
                  className="option-link en-us"
                  target="_blank"
                  download="stwGabriel_English-US.pdf"
                >
                  .pdf
                </Link>
              </FileSelector>
            )}
          </File>

          <File>

            <header className="file-header">
              <img src={docIcon} alt="document" />
              <span>Português-BR</span>
            </header>

            <button
              type="button"
              className="download-button pt-br"
            >
              <img src={downloadIcon} alt="download" />
            </button>

            {portugueseOption && (
              <FileSelector>
                <Link
                  to={ptDocx}
                  className="option-link pt-br"
                  target="_blank"
                  download="stwGabriel_Portugues-BR.docx"
                >
                  .docx
                </Link>
                <div className="divider" />
                <Link
                  to={ptPdf}
                  className="option-link pt-br"
                  target="_blank"
                  download="stwGabriel_Portugues-BR.pdf"
                >
                  .pdf
                </Link>
              </FileSelector>
            )}

          </File>
        </DownloadOptions>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

DownloadModal.propTypes = {

  handleRenderDownloadModal: PropTypes.func.isRequired,
  renderDownloadModal: PropTypes.bool.isRequired,
};

export default DownloadModal;
