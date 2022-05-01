import MetaTitle from '../components/MetaTitle';
import HomeContainer from '../styles/pages/home';

function Home(): JSX.Element {
  return (
    <HomeContainer>
      <MetaTitle page="Home" />
      <h1>Home</h1>
    </HomeContainer>
  );
}

export default Home;
