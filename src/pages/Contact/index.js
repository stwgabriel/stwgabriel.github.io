import { useContext } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

import PageContainer from '../../components/PageContainer';
import PageBorder from '../../components/PageBorder';
import PageView from '../../components/PageView';
import PageTitle from '../../components/PageTitle';
import { ContactContainer } from './styles';
import Form from './components/Form';

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
        <ContactContainer>
          <div className="socials">
            <a href="https://linkedin.com" className="linkedin" target="_blank" rel="noreferrer">
              Linkedin
            </a>
            <a href="https://github.com" className="github" target="_blank" rel="noreferrer">
              Github
            </a>
            <a href="https://instagram.com" className="instagram" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
          <span>or</span>
          <Form />
        </ContactContainer>
      </PageView>
    </PageContainer>
  );
}

export default Contact;
