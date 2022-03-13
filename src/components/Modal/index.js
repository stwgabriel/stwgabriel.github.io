import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { v4 as uuid } from 'uuid';

import { Overlay, Container } from './styles';

import closeButton from '../../assets/images/icons/close.svg';
import clickToExit from '../../utils/clickToExit';

function Modal({
  renderModal, handleRenderModal,
  title, message, subMessage, links,
}) {

  if (!renderModal) { return null; }

  const ExitClassName = `click-to-exit_${uuid()}`;

  function handleClick(element) {

    const { target } = element;

    if (clickToExit(target, ExitClassName)) {
      handleRenderModal();
    }
  }

  useEffect(() => {

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  });

  return createPortal(
    <Overlay className={ExitClassName}>
      <Container>

        <header>

          <h2>{title}</h2>

          <button type="button" id="close-button" onClick={handleRenderModal}>
            <img src={closeButton} alt="close" />
          </button>
        </header>

        <main>
          <p>{message}</p>
          <p>{subMessage}</p>
        </main>

        <footer>
          {links.map(({ id, name, url }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {name}
            </a>
          ))}
        </footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  subMessage: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

Modal.defaultProps = {
  title: '',
  subMessage: '',
  links: [],
};

export default Modal;
