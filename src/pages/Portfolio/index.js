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
        to=""
      >
        Home
      </PageBorder>

      <PageView>
        <PageTitle className="no-select">Portfolio</PageTitle>
      </PageView>

      <PageBorder
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
