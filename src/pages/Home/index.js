import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { NavigationContext } from '../../contexts/NavigationContext';

import { Content, MainView, MeView } from './styles';

import { PageContainer } from '../../components/PageContainer';

import arrow from '../../assets/images/icons/arrow.svg';
import scroll from '../../assets/images/icons/mouse-scroll.svg';

function Home() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  function handleScroll() {

  }

  useEffect(() => {

    const intenalLinks = document.querySelectorAll('a[href^="#"]');

    intenalLinks.forEach((item) => { item.addEventListener('click', handleScroll); });

    return () => {
      intenalLinks.forEach((item) => { item.removeEventListener('click', handleScroll); });

    };
  }, []);

  return (
    <PageContainer>

      <Content>
        <MainView>

          <div className="row">

            <h1 id="home-title">
              <span>Hello,</span>
              <span>I&apos;m Gabriel</span>
            </h1>

            <div className="position">
              <span>Front-end Developer &amp;</span>
              <span>UX Design Students</span>
            </div>

          </div>

          <button type="button" className="scroll-down">
            <span>Scroll Down</span>
            <img src={scroll} alt="Scroll" />
          </button>

        </MainView>
        <MeView id="me">
          <span>random</span>
        </MeView>

        <div className="spaces">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

      </Content>

      <Link
        className="page-border from-right toPortifolio"
        onClick={handleNavigation}
        to="/portfolio"
      >
        <img className="arrow" src={arrow} alt="Arrow" />
        <span>Portfolio</span>
      </Link>

    </PageContainer>
  );
}

export default Home;
