import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { NavigationContext } from '../../contexts/NavigationContext';

import { PageContainer } from '../../components/PageContainer';
import { Content } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';

function Contact() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  return (

    <PageContainer>
      <Link className="page-border from-left toSkills" onClick={handleNavigation} to="/skills">
        <img className="arrow" src={arrow} alt="Arrow" />
        <span>Skills</span>
      </Link>
      <Content>
        <h1>contact</h1>
      </Content>
    </PageContainer>
  );
}

export default Contact;
