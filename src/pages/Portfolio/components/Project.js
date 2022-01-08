import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { ProjectContainer, Tag } from '../styles';

import dropdownArrow from '../../../assets/images/icons/dropdown-arrow.svg';

function Project({ item }) {

  const {
    title, description, subtitle, tags, image, projectUrl,
  } = item;

  const [isInfoSectionOpen, setIsInfoSectionOpen] = useState(false);

  function toggleInfoSectionState(event) {

    setIsInfoSectionOpen((prevState) => !prevState);
    event.target.blur();
  }

  return (
    <ProjectContainer className={isInfoSectionOpen ? 'open' : undefined}>

      <div className="main-image">
        <img src={image} alt="Project" />
        <div className="overlay" />
      </div>

      <div className="info no-select">

        <header>

          <h3>{title}</h3>

          <button onClick={toggleInfoSectionState} className="expand-close-button" type="button">

            <img
              className="no-select no-events"
              src={dropdownArrow}
              alt="Dropdown Arrow"
            />
          </button>
        </header>

        <p className="description">{description}</p>

        <div className="tags-container">

          <h3>{subtitle}</h3>

          <div className="tags">
            {tags && tags.map((tag) => <Tag key={uuidv4()}>{tag}</Tag>)}
          </div>
        </div>

        <div className="address-container">

          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
          >
            See project
          </a>
        </div>
      </div>
    </ProjectContainer>
  );
}

Project.propTypes = {

  item: PropTypes.shape({

    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    tags: PropTypes.shape([]).isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired, // mark as required later
  }).isRequired,
};

export default Project;
