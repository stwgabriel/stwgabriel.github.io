import { useContext } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

import PageContainer from '../../components/PageContainer';
import PageBorder from '../../components/PageBorder';
import PageView from '../../components/PageView';
import PageTitle from '../../components/PageTitle';

import { PortfolioContainer } from './styles';
import PortfolioGroup from './components/PortfolioGroup';
import NavMenu from '../../components/NavMenu';

import moveIt from '../../assets/images/move-it-project.png';

const items = [
  {
    title: 'Project',
    description: 'just a brief description of my incredible project, lorem ipsum silor domor amet lorem ipsum lorem ipsum',
    techs: ['HTML', 'CSS', 'Javascript', 'React', 'Git', 'Bash'],
    image: moveIt,
  },
  {
    title: 'Project',
    description: 'brief description',
    techs: ['HTML', 'CSS', 'Javascript'],
    image: moveIt,
  },
  {
    title: 'Project',
    description: 'just a brief description of my incredible project, lorem ipsum silor domor amet lorem ipsum lorem ipsum',
    techs: ['HTML', 'CSS', 'Javascript', 'React', 'Git', 'Bash'],
    image: moveIt,
  },
  {
    title: 'Project',
    description: 'brief description',
    techs: ['HTML', 'CSS', 'Javascript'],
    image: moveIt,
  },
  {
    title: 'Project',
    description: 'brief description',
    techs: ['HTML', 'CSS', 'Javascript'],
    image: moveIt,
  }];

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
        <NavMenu />
        <PageTitle className="no-select">Portfolio</PageTitle>
        <PortfolioContainer>
          <PortfolioGroup title="Front end projects" items={items} />
          <PortfolioGroup title="Design projects" items={items} />
        </PortfolioContainer>
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
