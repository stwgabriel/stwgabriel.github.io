import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { ProjectContainer, Tag } from './styles';

import dropdownArrow from '../../../assets/images/icons/dropdown-arrow.svg';

function Project({ item }) {

  const {

    title, description, techs, image, projectAddress,
  } = item;

  const [isInfoSectionOpen, setIsInfoSectionOpen] = useState(false);

  function toggleInfoSectionState() {

    setIsInfoSectionOpen((prevState) => !prevState);
  }

  return (
    <ProjectContainer className={isInfoSectionOpen ? 'open' : undefined}>

      <div className="main-image">
        <img src={image} alt="Project" />
        <div className="overlay" />
      </div>

      <div className="info">

        <header>

          <h3>{title}</h3>

          <button onClick={toggleInfoSectionState} className="icon" type="button">

            <img
              className="no-select no-events"
              src={dropdownArrow}
              alt="Dropdown Arrow"
            />
          </button>
        </header>

        <p className="description">{description}</p>

        <div className="tech-container">

          <h3>Techs</h3>

          <div className="techs">
            { techs && techs.map((tech) => <Tag key={uuidv4()}>{tech}</Tag>) }
          </div>
        </div>

        <div className="address-container">

          <a
            href={projectAddress}
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
    techs: PropTypes.shape([]).isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    projectAddress: PropTypes.string, // mark as required later
  }).isRequired,
};

export default Project;
