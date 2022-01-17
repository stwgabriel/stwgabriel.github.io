import { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { NavigationContext } from '../../contexts/NavigationContext';

import { addScrollListener, removeScrollListener } from '../../utils/smoothScroll';

import PageContainer from '../../components/PageContainer';
import PageBorderNav from '../../components/PageBorderNav';
import PageView from '../../components/PageView';
import NavMenu from '../../components/NavMenu';
import PageTitle from '../../components/PageTitle';
import PortfolioGroup from './components/PortfolioGroup';

import { PortfolioContainer } from './styles';

import moveItPreview from '../../assets/images/projectsPreview/move-it-preview.webp';
import devFinancePreview from '../../assets/images/projectsPreview/dev-finance-preview.webp';
import loopstudiosPreview from '../../assets/images/projectsPreview/loopstudios-preview.webp';
import wildbeastPreview from '../../assets/images/projectsPreview/wildbeast-preview.webp';
import personalWebsitePreview from '../../assets/images/projectsPreview/personal-website-preview.webp';

const frontEndProjectsArray = [
  {
    id: uuidv4(),
    title: 'MoveIt',
    description: 'MoveIt is a pomodoro app with challenges developed at NLW.',
    subtitle: 'Techs',
    tags: ['Typescript', 'Next', 'CSS', 'Git', 'GitHub'],
    image: moveItPreview,
    projectUrl: 'https://github.com/stwgabriel/moveit-next',
  },
  {
    id: uuidv4(),
    title: 'Dev.Finances',
    description: 'Dev Finances is a finance management application.',
    subtitle: 'Techs',
    tags: ['HTML', 'Scss', 'Javascript', 'Git'],
    image: devFinancePreview,
    projectUrl: 'https://github.com/stwgabriel/dev.finances',
  },
  {
    id: uuidv4(),
    title: 'LoopStudios',
    description: 'LoopStudios is a FrontendMentor challenge.',
    subtitle: 'Techs',
    tags: ['HTML', 'Scss', 'Javascript', 'Git'],
    image: loopstudiosPreview,
    projectUrl: 'https://github.com/stwgabriel/loopstudios',
  },
  {
    id: uuidv4(),
    title: 'WildBeast Blog Page',
    description: 'WildBeast is a hands-on project by Origamid to learn CSS Grid.',
    subtitle: 'Techs',
    tags: ['HTML', 'Scss', 'CSS Grid', 'Git'],
    image: wildbeastPreview,
    projectUrl: 'https://github.com/stwgabriel/wildbeast-blog-page',
  },
];

const designProjectsArray = [
  {
    id: uuidv4(),
    title: 'Personal Website ',
    description: 'Website made to show my projects and tell a little about me and my work.',
    subtitle: 'Tags',
    tags: ['Figma', 'UX Design'],
    image: personalWebsitePreview,
    projectUrl: 'https://www.figma.com/file/2vpMSoW7n5KdikPv9mW5HV/public-portfolio?node-id=1%3A169',
  },
];

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
        to=""
      >
        Home
      </PageBorderNav>

      <PageView>
        <NavMenu />
        <button type="button" id="main-content" aria-hidden="true">
          {' '}
        </button>
        <PageTitle className="no-select">Portfolio</PageTitle>
        <PortfolioContainer>
          <PortfolioGroup title="Front end projects" items={frontEndProjectsArray} />
          <PortfolioGroup title="Design projects" items={designProjectsArray} />
        </PortfolioContainer>
      </PageView>

      <PageBorderNav
        borderSide="right"
        handleNavigation={handleNavigation}
        from="from-right"
        to="skills"
      >
        Skills
      </PageBorderNav>
    </PageContainer>
  );
}

export default Portfolio;
