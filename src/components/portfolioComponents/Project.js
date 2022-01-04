import PropTypes from 'prop-types';

import { ProjectContainer } from './styles';
import Tech from './Tech';

import dropdownArrow from '../../assets/images/icons/dropdown-arrow.svg';

function Project({ item }) {
  const {
    title, description, techs, image,
  } = item;

  return (
    <ProjectContainer>
      <div className="wrapper">
        <img src={image} alt="Project" />
        <div className="overlay" />
        <div className="info">
          <header>
            <h1>{ title }</h1>
            <img src={dropdownArrow} alt="Dropdown Arrow" />
          </header>
          <p className="description">{description}</p>
          <div className="techs">
            { techs && techs.map((tech) => <Tech>{tech}</Tech>) }
          </div>
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
