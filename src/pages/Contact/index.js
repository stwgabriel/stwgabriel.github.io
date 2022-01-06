import { useContext } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

import PageContainer from '../../components/PageContainer';
import PageBorder from '../../components/PageBorder';
import PageView from '../../components/PageView';
import PageTitle from '../../components/PageTitle';
import { ContactContainer } from './styles';
import Form from './components/Form';

import linkedinIcon from '../../assets/images/icons/linkedin.svg';
import githubIcon from '../../assets/images/icons/github.svg';
import instagramIcon from '../../assets/images/icons/instagram.svg';
import NavMenu from '../../components/NavMenu';

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
        <NavMenu />
        <PageTitle className="no-select">Contact</PageTitle>
        <ContactContainer>
          <div className="socials">
            <a href="https://linkedin.com" className="linkedin" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
            <a href="https://github.com" className="github" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="Github Icon" />
            </a>
            <a href="https://instagram.com" className="instagram" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram Icon" />
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
