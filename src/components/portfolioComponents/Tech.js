import PropTypes from 'prop-types';

import { TechContainer } from './styles';

function Tech({ children }) {
  return (
    <TechContainer>
      <span>{children}</span>
    </TechContainer>
  );
}

Tech.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tech;
