import { useContext } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

import PageContainer from '../../components/PageContainer';
import PageBorder from '../../components/PageBorder';
import PageView from '../../components/PageView';
import PageTitle from '../../components/PageTitle';

function Portfolio() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  return (

    <PageContainer>
      <PageBorder
        handleNavigation={handleNavigation}
        from="from-left"
        to="portfolio"
      >
        Portfolio
      </PageBorder>
      <PageView>
        <PageTitle className="no-select">Skills</PageTitle>
      </PageView>
      <PageBorder
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
