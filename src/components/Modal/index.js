/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { v4 as uuid } from 'uuid';

import { Link, useHistory } from 'react-router-dom';
import { Overlay, Container } from './styles';

import closeButton from '../../assets/images/icons/close.svg';
import clickToExit from '../../utils/clickToExit';

function Modal({
  renderModal,
  handleRenderModal,
  title,
  message,
  subMessage,
  links,
  unCloseable,
}) {

  if (!renderModal) { return null; }

  const ExitClassName = `click-to-exit_${uuid()}`;

  const history = useHistory();

  function handleClick(element) {

    const { target } = element;

    if (clickToExit(target, ExitClassName)) {
      !unCloseable ? handleRenderModal() : (() => '')();
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
          {
            !unCloseable
              ? (
                <button
                  type="button"
                  id="close-button"
                  onClick={handleRenderModal}
                >
                  <img src={closeButton} alt="close" />
                </button>
              )
              : ''
          }

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

        {
          (unCloseable && history.length > 3) ? (
            <button
              type="button"
              onClick={() => history.goBack()}
              style={{
                background: '#454158',
                borderRadius: '1rem',
                color: '#fff',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                display: 'block',
                padding: '1rem',
                margin: '2rem auto 0',
                textAlign: 'center',
                width: '12rem',
              }}
            >
              Go Back
            </button>
          ) : (
            <Link
              style={{
                background: '#454158',
                borderRadius: '1rem',
                color: '#fff',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                display: 'block',
                padding: '1rem',
                margin: '2rem auto 0',
                textAlign: 'center',
                width: '12rem',
              }}
              to="/"
              className="onLeft mobile-control from-left"
            >
              Go Home
            </Link>
          )
      }

      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  subMessage: PropTypes.string,
  renderModal: PropTypes.bool,
  unCloseable: PropTypes.bool,
  handleRenderModal: PropTypes.func,
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
  renderModal: false,
  unCloseable: false,
  handleRenderModal: () => '',
};

export default Modal;
