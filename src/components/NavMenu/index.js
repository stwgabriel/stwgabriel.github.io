import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationContext } from '../../contexts/NavigationContext';

import dropDownIcon from '../../assets/images/icons/dropdown-arrow.svg';

import { Container } from './styles';

function NavMenu() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  function focusOnContent() {

    document.getElementById('skip-to-content').blur();
    document.getElementById('main-content').focus();
  }

  return (

    <Container>
      <ul id="nav-menu-options">
        <li className="skip-to-content-container">
          <a href="#main-content" id="skip-to-content" onClick={focusOnContent}> Skip to content</a>
        </li>
        <li>
          <NavLink
            to="/"
            className="nav-menu-option"
            activeClassName="active"
            onClick={handleNavigation}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className="nav-menu-option"
            activeClassName="active"
            onClick={handleNavigation}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className="nav-menu-option"
            activeClassName="active"
            onClick={handleNavigation}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="nav-menu-option"
            activeClassName="active"
            onClick={handleNavigation}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button
            id="more-options"
            type="button"
          >
            <span>More</span>
            <img src={dropDownIcon} alt="open modal" />
          </button>
        </li>
      </ul>
    </Container>
  );
}

export default NavMenu;
