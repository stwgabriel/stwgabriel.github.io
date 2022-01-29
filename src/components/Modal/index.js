import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { Overlay, Container } from './styles';

import closeButton from '../../assets/images/icons/close.svg';

function Modal({
  renderModal, handleRenderModal,
  title, message, subMessage, links,
}) {

  const footerLinks = JSON.parse(links);

  if (!renderModal) { return null; }

  return createPortal(
    <Overlay className="click-to-exit">
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
          {footerLinks.map(({ id, name, url }) => (
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

Modal.prpTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  subMessage: PropTypes.string,
  links: PropTypes.string,
};

Modal.defaultProps = {
  title: '',
  subMessage: '',
  links: '',
};

export default Modal;
