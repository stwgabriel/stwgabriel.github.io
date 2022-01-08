import { useContext, useEffect, useState } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

import { addScrollListener, removeScrollListener } from '../../utils/smoothScroll';

import { MainView, AboutView } from './styles';

import PageContainer from '../../components/PageContainer';
import PageBorder from '../../components/PageBorder';
import PageView from '../../components/PageView';
import NavMenu from '../../components/NavMenu';
import PageTitle from '../../components/PageTitle';
import DownloadModal from '../../components/DownloadModal';

import scroll from '../../assets/images/icons/mouse-scroll.svg';
import mePicture from '../../assets/images/me-picture.png';
import downloadIcon from '../../assets/images/icons/download-arrow.svg';

function Home() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  const [renderDownloadModal, setRenderDownloadModal] = useState(false);

  function handleModalVisibility() {

    setRenderDownloadModal(() => (!renderDownloadModal));
  }

  useEffect(() => {

    addScrollListener();

    return () => {

      removeScrollListener();
    };
  });

  return (

    <PageContainer id="page-container">
      <PageView marginLeft>
        <MainView>

          <NavMenu />
          <button type="button" id="main-content">
            {' '}
          </button>
          <h1 id="home-title">
            <span>Hello,</span>
            <span>I&apos;m Gabriel</span>
          </h1>
          <div className="bottom-row">
            <a href="#me" className="scroll-down no-select">
              <span>Scroll Down</span>
              <img src={scroll} alt="Scroll" />
            </a>

            <div className="position">
              <span>Front-end Developer</span>
              <span>&amp; UX Design Student</span>
            </div>
          </div>
        </MainView>

        <AboutView id="me">

          <PageTitle className="no-select">About Me</PageTitle>

          <div className="me-content">

            <div className="content__text">
              <p>
                Hi, I&lsquo;m Gabriel and I&lsquo;ll tell you a little bit about myself, I&lsquo;m
                18 years old and I&lsquo;m a Front-End Developer located in Brazil, passionate about
                web development, graphic arts, and helping! I&lsquo;m always interested in cool
                stuff.
              </p>
              <p>
                Currently self-taught in web development and design, I always try to keep myself
                updated and organized in subjects of the area so I can always offer the best of
                myself in my creations.
              </p>
              <p>
                I am interested in the whole spectrum of front-end development and am
                looking for a first opportunity to work on ambitious projects and hopefully
                learn a lot from them.
              </p>
            </div>

            <div className="content__picture no-select">

              <img src={mePicture} alt="Me" className="no-select" />
              <button onClick={handleModalVisibility} className="download-resume" type="button">

                <span>Resume</span>
                <img src={downloadIcon} alt="download" />
              </button>
            </div>

          </div>

          <DownloadModal
            handleRenderDownloadModal={() => (handleModalVisibility)}
            renderDownloadModal={renderDownloadModal}
          />
        </AboutView>

      </PageView>

      <PageBorder
        borderSide="right"
        from="from-right"
        to="portfolio"
        handleNavigation={handleNavigation}
      >
        Portfolio
      </PageBorder>

    </PageContainer>
  );
}

export default Home;
