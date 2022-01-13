import Routes from '../../routes';

import NavigationProvider from '../../contexts/NavigationContext';
import MobileNavControls from '../MobileNavControls';
import { Container, MainContent, NavigationContainer } from './styles';

function App() {

  return (
    <NavigationProvider>
      <Container>

        <MainContent>
          <Routes />
        </MainContent>

        <NavigationContainer>
          <MobileNavControls />
        </NavigationContainer>

      </Container>
    </NavigationProvider>
  );
}

export default App;
