import { Container } from './styles';

import Routes from '../../routes';
// import NavMenu from '../NavMenu';
import NavigationProvider from '../../contexts/NavigationContext';

function App() {

  return (

    <NavigationProvider>
      <Container>
        <Routes />
        {/* <NavMenu /> */}
      </Container>
    </NavigationProvider>
  );
}

export default App;
