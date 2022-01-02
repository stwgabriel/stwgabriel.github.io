import { useContext } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

import PageContainer from '../../components/PageContainer';
import PageBorder from '../../components/PageBorder';
import PageView from '../../components/PageView';
import PageTitle from '../../components/PageTitle';
import { HorizontalScrollView, Project } from './styles';

function Portfolio() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  return (

    <PageContainer>

      <PageBorder
        borderSide="left"
        handleNavigation={handleNavigation}
        from="from-left"
        to=""
      >
        Home
      </PageBorder>

      <PageView>
        <PageTitle className="no-select">Portfolio</PageTitle>
        <HorizontalScrollView>
          <h2>Front-end Projects</h2>
          <Project>
            <div className="project__image">
              {/* <img src="" alt="Project Preview" /> */}
            </div>
            <div className="project__content--overlay">
              <div className="project__content">
                <header>
                  <h3>Title</h3>
                  <button className="expand-close-info" type="button">{' '}</button>
                </header>
                <p className="content__description">description</p>
                <h3>Tech</h3>
                <div className="tech-tags">
                  <span className="tech-tag">HTML</span>
                </div>
              </div>
            </div>
          </Project>
        </HorizontalScrollView>
      </PageView>

      <PageBorder
        borderSide="right"
        handleNavigation={handleNavigation}
        from="from-right"
        to="skills"
      >
        Skills
      </PageBorder>

    </PageContainer>
  );
}

export default Portfolio;
