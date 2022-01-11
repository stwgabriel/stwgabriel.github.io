import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import rightArrow from '../../assets/images/icons/right-arrow.svg';
import leftArrow from '../../assets/images/icons/left-arrow.svg';
import { Container } from './styles';

function PageBorderNav({
  borderSide, handleNavigation, from, to, children,
}) {

  return (
    <Container borderSide={borderSide}>
      <Link
        to={`/${to}`}
        onClick={handleNavigation}
        className={`page-border ${from} to-${to === '' ? 'home' : to} no-select`}
      >
        <img
          alt="Arrow"
          className="arrow no-select no-events"
          src={borderSide === 'left' ? leftArrow : rightArrow}
        />
        <span className="no-select no-events">{children}</span>

      </Link>
      <div className="hoverLayer no-select no-events">
        <img
          alt="Arrow"
          className="arrow"
          src={borderSide === 'left' ? leftArrow : rightArrow}
        />
        <span>{children}</span>
      </div>
    </Container>
  );
}

PageBorderNav.propTypes = {

  borderSide: PropTypes.string.isRequired,
  handleNavigation: PropTypes.func.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageBorderNav;
