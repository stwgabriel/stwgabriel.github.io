import { useContext } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

import PageContainer from '../../components/PageContainer';
import PageBorder from '../../components/PageBorder';
import PageView from '../../components/PageView';
import PageTitle from '../../components/PageTitle';

function Contact() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  return (

    <PageContainer>
      <PageBorder
        borderSide="left"
        handleNavigation={handleNavigation}
        from="from-left"
        to="skills"
      >
        Skills
      </PageBorder>
      <PageView>
        <PageTitle className="no-select">Contact</PageTitle>
      </PageView>
    </PageContainer>
  );
}

export default Contact;
