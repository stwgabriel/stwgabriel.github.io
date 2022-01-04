import { useState } from 'react';
import PropTypes from 'prop-types';

import { ProjectContainer } from './styles';
import Tech from './Tech';

import dropdownArrow from '../../assets/images/icons/dropdown-arrow.svg';

function Project({ item }) {
  const {
    title, description, techs, image,
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
          <h3>{ title }</h3>
          <button className="icon" type="button">
            <img src={dropdownArrow} alt="Dropdown Arrow" />
          </button>
        </header>
        <p className="description">{description}</p>
        <div className="tech-container">
          <h3>Techs</h3>
          <div className="techs">
            { techs && techs.map((tech) => <Tech>{tech}</Tech>) }
          </div>
        </div>
        <div className="see-project-button">
          <button type="button" onClick={toggleInfoSectionState}>
            See project
          </button>
        </div>
      </div>
    </ProjectContainer>
  );
}

Project.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techs: PropTypes.shape.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
