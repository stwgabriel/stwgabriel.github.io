import { useContext } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

import PageContainer from '../../components/PageContainer';
import PageBorder from '../../components/PageBorder';
import PageView from '../../components/PageView';
import PageTitle from '../../components/PageTitle';

import PortfolioContainer from './styles';

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
        <PortfolioContainer />
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
