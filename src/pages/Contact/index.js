import { useContext } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

import { PageContainer } from '../../components/PageContainer';
import PageBorder from '../../components/PageBorder';
import { Content } from './styles';

function Contact() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  return (

    <PageContainer>
      <PageBorder handleNavigation={handleNavigation} from="from-left" to="skills" />
      <Content>
        <h1>contact</h1>
      </Content>
    </PageContainer>
  );
}

export default Contact;
