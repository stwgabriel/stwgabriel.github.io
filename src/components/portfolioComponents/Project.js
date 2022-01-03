import PropTypes from 'prop-types';
import { ProjectContainer } from './styles';

function Project({ item }) {
  const { title, description, techs } = item;

  return (
    <ProjectContainer>
      <p>{title}</p>
      <p>{description}</p>
      <p>{techs}</p>
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
