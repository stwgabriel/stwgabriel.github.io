import { useContext, useEffect } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

import { addScrollListener, removeScrollListener } from '../../utils/smoothScroll';

import PageContainer from '../../components/PageContainer';
import PageBorder from '../../components/PageBorder';
import PageView from '../../components/PageView';
import PageTitle from '../../components/PageTitle';
import NavMenu from '../../components/NavMenu';

function Portfolio() {
  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  useEffect(() => {

    addScrollListener();

    return () => {

      removeScrollListener();
    };
  });

  return (
    <PageContainer id="page-container">
      <PageBorder
        borderSide="left"
        handleNavigation={handleNavigation}
        from="from-left"
        to="portfolio"
      >
        Portfolio
      </PageBorder>
      <PageView>
        <NavMenu />
        <button type="button" id="main-content">
          {' '}
        </button>
        <PageTitle className="no-select">Skills</PageTitle>
      </PageView>
      <PageBorder
        borderSide="right"
        handleNavigation={handleNavigation}
        from="from-right"
        to="contact"
      >
        Contact
      </PageBorder>
    </PageContainer>
  );
}

export default Portfolio;
