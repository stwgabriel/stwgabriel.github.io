import { useContext, useEffect, useState } from 'react';
import reactDOM from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { NavigationContext } from '../../contexts/NavigationContext';

import { Container } from './styles';

import toRightArrow from '../../assets/images/icons/right-arrow.svg';
import toLeftArrow from '../../assets/images/icons/left-arrow.svg';

// `page-border ${from} to-${to === '' ? 'home' : to} no-select`
function MobileNavControls() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  const [leftControl, setLeftControl] = useState({
    goToName: '',
    goToPath: '',
    render: false,
  });
  const [rightControl, setRightControl] = useState({
    goToName: '',
    goToPath: '',
    render: false,
  });

  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {

    setPathname(location.pathname);

    if (pathname === '/') {
      setLeftControl({
        goToName: '',
        goToPath: '',
        render: false,
      });
      setRightControl({
        goToName: 'Portfolio',
        goToPath: 'portfolio',
        render: true,
      });
    }
    if (pathname === '/portfolio') {
      setLeftControl({
        goToName: 'Home',
        goToPath: '/',
        render: true,
      });
      setRightControl({
        goToName: 'Skills',
        goToPath: 'skills',
        render: true,
      });
    }
    if (pathname === '/skills') {
      setLeftControl({
        goToName: 'Portfolio',
        goToPath: '/portfolio',
        render: true,
      });
      setRightControl({
        goToName: 'Contact',
        goToPath: 'contact',
        render: true,
      });
    }
    if (pathname === '/contact') {
      setRightControl({
        goToName: '',
        goToPath: '',
        render: false,
      });
      setLeftControl({
        goToName: 'Skills',
        goToPath: 'skills',
        render: true,
      });
    }
  }, [location.pathname, pathname]);

  return reactDOM.createPortal(

    <Container className="no-select">

      {leftControl.render && (

        <Link
          to={leftControl.goToPath}
          className="onLeft mobile-control from-left"
          onClick={handleNavigation}
        >
          <img
            src={toLeftArrow}
            alt="arrow-icon"
            className="no-events"
          />
          <span className="no-events">
            {leftControl.goToName}
          </span>
        </Link>
      )}

      {(leftControl.render === true && rightControl.render === true) && <hr />}

      {rightControl.render && (

        <Link
          to={rightControl.goToPath}
          className="onRight mobile-control from-right"
          onClick={handleNavigation}
        >
          <span className="no-events">
            {rightControl.goToName}
          </span>
          <img
            src={toRightArrow}
            alt="arrow-icon"
            className="no-events"
          />
        </Link>
      )}

    </Container>,
    document.getElementById('navigation-root'),
  );
}

export default MobileNavControls;
