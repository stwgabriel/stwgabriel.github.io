import Routes from '../../routes';

import NavigationProvider from '../../contexts/NavigationContext';
import MobileNavControls from '../MobileNavControls';
import { Container } from './styles';

function App() {

  return (
    <NavigationProvider>
      <Container>
        <Routes />
      </Container>
      <MobileNavControls />
    </NavigationProvider>
  );
}

export default App;
