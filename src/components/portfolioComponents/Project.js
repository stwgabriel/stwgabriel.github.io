import PropTypes from 'prop-types';
import { ProjectContainer } from './styles';
import Tech from './Tech';

function Project({ item }) {
  const { title, description, techs } = item;

  return (
    <ProjectContainer>
      <div className="wrapper">
        { /* futuramente <img /> */ }
        <div className="overlay" />
        <div className="info">
          <header>
            <h1>{ title }</h1>
            { /* icon <img />  */ }
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
  }).isRequired,
};

export default Project;
