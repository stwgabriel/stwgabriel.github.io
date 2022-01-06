import PropTypes from 'prop-types';
import Project from './Project';
import { PortfolioGroupContainer, ProjectListContainer } from './styles';

function PortfolioGroup({ title, items }) {

  return (
    <PortfolioGroupContainer>

      <header id="portfolio-group-header">
        <h2>{title}</h2>
      </header>

      <ProjectListContainer>

        { items && items.map((item) => <Project item={item} key={item.id} />) }
      </ProjectListContainer>
    </PortfolioGroupContainer>
  );
}

PortfolioGroup.propTypes = {

  title: PropTypes.string.isRequired,
  items: PropTypes.shape([]).isRequired,
};

export default PortfolioGroup;
