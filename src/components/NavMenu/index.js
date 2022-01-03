import { NavLink } from 'react-router-dom';
import { Container } from './styles';

function NavMenu() {

  return (

    <Container>
      <ul id="nav-options">
        <li>
          <NavLink className="nav-option" activeClassName="active">
            {' '}
          </NavLink>
        </li>
      </ul>
    </Container>
  );
}

export default NavMenu;
