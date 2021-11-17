import { useContext, useEffect, useState } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

import { MainView, MeView } from './styles';

import PageContainer from '../../components/PageContainer';
import PageBorder from '../../components/PageBorder';
import PageView from '../../components/PageView';
import PageTitle from '../../components/PageTitle';
import DownloadModal from '../../components/DownloadModal';

import scroll from '../../assets/images/icons/mouse-scroll.svg';
import mePicture from '../../assets/images/me-picture.png';
import downloadIcon from '../../assets/images/icons/download.svg';

function Home() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  const [modalVisible, setModalVisible] = useState(false);

  function handleScroll(e) {

    e.preventDefault();
    const { target } = e;
    const finalTargetId = target.getAttribute('href');
    const finalTarget = document.querySelector(finalTargetId).offsetTop;

    document.getElementById('page-container').scroll({
      top: finalTarget + 90,
      behavior: 'smooth',
    });
  }

  function handleModalVisibility() {

    setModalVisible(() => (!modalVisible));
  }

  useEffect(() => {

    const intenalLinks = document.querySelectorAll('a[href^="#"]');

    intenalLinks.forEach((item) => { item.addEventListener('click', handleScroll); });

    return () => {

      intenalLinks.forEach((item) => { item.removeEventListener('click', handleScroll); });
    };
  }, []);

  return (

    <PageContainer id="page-container">
      <PageView marginLeft>

        <MainView>

          <div className="row">

            <h1 id="home-title">
              <span>Hello,</span>
              <span>I&apos;m Gabriel</span>
            </h1>

            <div className="position">
              <span>Front-end Developer &amp;</span>
              <span>UX Design Student</span>
            </div>

          </div>

          <a href="#me" className="scroll-down no-select">
            <span>Scroll Down</span>
            <img src={scroll} alt="Scroll" />
          </a>

        </MainView>

        <MeView id="me">

          <PageTitle className="no-select"> Me </PageTitle>

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

          {modalVisible ? <DownloadModal handleClose={handleModalVisibility} /> : ''}
        </MeView>
      </PageView>
      <PageBorder handleNavigation={handleNavigation} from="from-right" to="portfolio">
        Portfolio
      </PageBorder>

    </PageContainer>
  );
}

export default Home;
