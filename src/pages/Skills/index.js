import { useContext } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

import { PageContainer } from '../../components/PageContainer';
import PageBorder from '../../components/PageBorder';
import { Content } from './styles';

function Portfolio() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  return (

    <PageContainer>
      <PageBorder handleNavigation={handleNavigation} from="from-left" to="portfolio" />
      <Content>
        <h1> Skills </h1>
      </Content>
      <PageBorder handleNavigation={handleNavigation} from="from-right" to="contact" />
    </PageContainer>
  );
}

export default Portfolio;
