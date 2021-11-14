import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import arrow from '../../assets/images/icons/arrow.svg';
import { Container } from './styles';

function PageBorder({ handleNavigation, from, to }) {

  return (
    <Container>
      <Link
        className={`page-border ${from} toPortifolio no-select`}
        onClick={handleNavigation}
        to={`/${to}`}
      >
        <img className="arrow" src={arrow} alt="Arrow" />
        <span>Portfolio</span>

      </Link>
    </Container>
  );
}

PageBorder.propTypes = {

  handleNavigation: PropTypes.func.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default PageBorder;
