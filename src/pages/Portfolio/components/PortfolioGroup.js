import PropTypes from 'prop-types';
import Project from './Project';
import { PortfolioGroupContainer, ProjectListContainer } from '../styles';

function PortfolioGroup({ title, items }) {

  return (
    <PortfolioGroupContainer>

      <header id="portfolio-group-header">
        <h2>{title}</h2>
      </header>

      <ProjectListContainer>
        {items && items.map(({
          projectId,
          projectTitle,
          projectDescription,
          projectSubtitle,
          projectTags,
          projectImage,
          projectUrl,

        }) => (
          <Project
            projectTitle={projectTitle}
            projectDescription={projectDescription}
            projectSubtitle={projectSubtitle}
            projectTags={projectTags}
            projectImage={projectImage}
            projectUrl={projectUrl}
            key={projectId}
          />
        ))}
      </ProjectListContainer>
    </PortfolioGroupContainer>
  );
}

PortfolioGroup.propTypes = {

  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape(
      {
        projectId: PropTypes.string,
        projectTitle: PropTypes.string,
        projectDescription: PropTypes.string,
        projectSubtitle: PropTypes.string,
        projectTags: PropTypes.PropTypes.arrayOf(
          PropTypes.string,
        ),
        projectImage: PropTypes.string,
        projectUrl: PropTypes.string,
      },
    ),
  ).isRequired,
};

export default PortfolioGroup;
