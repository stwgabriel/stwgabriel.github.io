import PropTypes from 'prop-types';
import Project from './Project';
import { PortfolioGroupContainer, ProjectListContainer } from './styles';

import moveIt from '../../assets/images/move-it-project.png';

function PortfolioGroup(props) {
  const { title, items } = props;

  return (
    <PortfolioGroupContainer>
      <header>
        <h2>{title}</h2>
      </header>
      <ProjectListContainer>
        { items && items.map((item) => <Project item={item} />) }
      </ProjectListContainer>
    </PortfolioGroupContainer>
  );
}

PortfolioGroup.defaultProps = {
  title: 'Projects',
  items: [
    {
      title: 'Project',
      description: 'brief description',
      techs: ['HTML', 'CSS', 'Javascript', 'React', 'Git', 'Bash'],
      image: moveIt,
    }, {
      title: 'Project',
      description: 'brief description',
      techs: ['HTML', 'CSS', 'Javascript', 'React'],
      image: moveIt,
    },
  ],
};

PortfolioGroup.propTypes = {
  title: PropTypes.string,
  items: PropTypes.shape(),
};

export default PortfolioGroup;
