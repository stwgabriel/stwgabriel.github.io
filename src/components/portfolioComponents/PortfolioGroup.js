import PropTypes from 'prop-types';

function PortfolioGroup({ title, items }) {
  return (
    <div>
      PortfolioGroup
    </div>
  )
}

PortfolioGroup.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
}

export default PortfolioGroup;