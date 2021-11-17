import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import arrow from '../../assets/images/icons/arrow.svg';
import { Container } from './styles';

function PageBorder({
  handleNavigation, from, to, children,
}) {

  return (
    <Container>
      <Link
        className={`page-border ${from} to-${to === '' ? 'home' : to} no-select`}
        onClick={handleNavigation}
        to={`/${to}`}
      >
        <img className="arrow" src={arrow} alt="Arrow" />
        <span>{children}</span>

      </Link>
    </Container>
  );
}

PageBorder.propTypes = {

  handleNavigation: PropTypes.func.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageBorder;
