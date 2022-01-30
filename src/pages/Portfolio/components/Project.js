import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { ProjectContainer, Tag } from '../styles';

import dropdownArrow from '../../../assets/images/icons/dropdown-arrow.svg';

function Project({
  projectTitle,
  projectDescription,
  projectSubtitle,
  projectTags,
  projectImage,
  projectUrl,
}) {

  const [isInfoSectionOpen, setIsInfoSectionOpen] = useState(false);

  function toggleInfoSectionState(event) {

    setIsInfoSectionOpen((prevState) => !prevState);
    event.target.blur();
  }

  return (
    <ProjectContainer
      className={isInfoSectionOpen ? 'open' : undefined}
      title={`Project ${projectTitle} | ${projectDescription}`}
    >

      <div className="main-image">
        <img src={projectImage} alt="Project" />
        <div className="overlay" />
      </div>

      <div className="info no-select">

        <header>

          <h3>{projectTitle}</h3>

          <button onClick={toggleInfoSectionState} className="expand-close-button" type="button">

            <img
              className="no-select no-events"
              src={dropdownArrow}
              alt="Dropdown Arrow"
            />
          </button>
        </header>

        <p className="description">{projectDescription}</p>

        <div className="tags-container">

          <h3>{projectSubtitle}</h3>

          <div className="tags">
            {projectTags && projectTags.map((tag) => <Tag key={uuidv4()}>{tag}</Tag>)}
          </div>
        </div>
        <div className="see-project-button-container">
          <a
            className="see-project-button"
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            tabIndex="-1"
          >
            See project
          </a>
        </div>
      </div>
    </ProjectContainer>
  );
}

Project.propTypes = {

  projectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectSubtitle: PropTypes.string.isRequired,
  projectTags: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  projectImage: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
};

export default Project;
