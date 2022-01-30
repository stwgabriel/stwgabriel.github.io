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
    projectId: uuidv4(),
    projectTitle: 'MoveIt',
    projectDescription: 'MoveIt is a pomodoro app with challenges developed at NLW.',
    projectSubtitle: 'Techs',
    projectTags: ['Typescript', 'Next', 'CSS', 'Git', 'GitHub'],
    projectImage: moveItPreview,
    projectUrl: 'https://github.com/stwgabriel/moveit-next',
  },
  {
    projectId: uuidv4(),
    projectTitle: 'Dev.Finances',
    projectDescription: 'Dev Finances is a finance management application.',
    projectSubtitle: 'Techs',
    projectTags: ['HTML', 'Scss', 'Javascript', 'Git'],
    projectImage: devFinancePreview,
    projectUrl: 'https://github.com/stwgabriel/dev.finances',
  },
  {
    projectId: uuidv4(),
    projectTitle: 'LoopStudios',
    projectDescription: 'LoopStudios is a FrontendMentor challenge.',
    projectSubtitle: 'Techs',
    projectTags: ['HTML', 'Scss', 'Javascript', 'Git'],
    projectImage: loopstudiosPreview,
    projectUrl: 'https://github.com/stwgabriel/loopstudios',
  },
  {
    projectId: uuidv4(),
    projectTitle: 'WildBeast Blog Page',
    projectDescription: 'WildBeast is a hands-on project by Origamid to learn CSS Grid.',
    projectSubtitle: 'Techs',
    projectTags: ['HTML', 'Scss', 'CSS Grid', 'Git'],
    projectImage: wildbeastPreview,
    projectUrl: 'https://github.com/stwgabriel/wildbeast-blog-page',
  },
];

const designProjectsArray = [
  {
    projectId: uuidv4(),
    projectTitle: 'Personal Website ',
    projectDescription: 'Website made to show my projects and tell a little about me and my work.',
    projectSubtitle: 'Tags',
    projectTags: ['Figma', 'UX Design'],
    projectImage: personalWebsitePreview,
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
