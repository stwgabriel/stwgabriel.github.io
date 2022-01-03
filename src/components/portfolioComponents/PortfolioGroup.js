import PropTypes from 'prop-types';
import Project from './Project';
import { PortfolioGroupContainer, ProjectListContainer } from './styles';

function PortfolioGroup(props) {
  const { title, items } = props;

  return (
    <PortfolioGroupContainer>
      <header>
        <h1>{title}</h1>
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
      techs: ['HTML', 'CSS', 'Javascript', 'React'],
    }, {
      title: 'Project',
      description: 'brief description',
      techs: ['HTML', 'CSS', 'Javascript', 'React'],
    },
  ],
};

PortfolioGroup.propTypes = {
  title: PropTypes.string,
  items: PropTypes.shape(),
};

export default PortfolioGroup;
