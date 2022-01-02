import Routes from '../../routes';

import NavigationProvider from '../../contexts/NavigationContext';
import { Container } from './styles';

function App() {

  return (
    <NavigationProvider>
      <Container>
        <Routes />
      </Container>
    </NavigationProvider>
  );
}

export default App;
