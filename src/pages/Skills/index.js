import { useContext, useEffect } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

import { addScrollListener, removeScrollListener } from '../../utils/smoothScroll';

import PageContainer from '../../components/PageContainer';
import PageView from '../../components/PageView';
import PageBorderNav from '../../components/PageBorderNav';
import NavMenu from '../../components/NavMenu';
import PageTitle from '../../components/PageTitle';

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
      <PageBorderNav
        borderSide="left"
        handleNavigation={handleNavigation}
        from="from-left"
        to="portfolio"
      >
        Portfolio
      </PageBorderNav>
      <PageView>
        <NavMenu />
        <button type="button" id="main-content">
          {' '}
        </button>
        <PageTitle className="no-select">Skills</PageTitle>
      </PageView>
      <PageBorderNav
        borderSide="right"
        handleNavigation={handleNavigation}
        from="from-right"
        to="contact"
      >
        Contact
      </PageBorderNav>
    </PageContainer>
  );
}

export default Portfolio;
