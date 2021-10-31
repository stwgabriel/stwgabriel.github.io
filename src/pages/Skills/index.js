import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { NavigationContext } from '../../contexts/NavigationContext';

import { PageContainer } from '../../components/PageContainer';
import { Content } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';

function Portfolio() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  return (

    <PageContainer>
      <Link className="page-border from-left toPortifolio" onClick={handleNavigation} to="/portfolio">
        <img className="arrow" src={arrow} alt="arrow" />
        <span>Portfolio</span>
      </Link>
      <Content>
        <h1> Skills </h1>
      </Content>
      <Link onClick={handleNavigation} className="page-border from-right toContact" to="/contact">
        <img className="arrow" src={arrow} alt="arrow" />
        <span>Contact</span>
      </Link>
    </PageContainer>
  );
}

export default Portfolio;
