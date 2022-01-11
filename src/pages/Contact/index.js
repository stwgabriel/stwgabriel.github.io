import { useContext, useEffect } from 'react';

import { NavigationContext } from '../../contexts/NavigationContext';

import { addScrollListener, removeScrollListener } from '../../utils/smoothScroll';

import PageContainer from '../../components/PageContainer';
import PageView from '../../components/PageView';
import PageBorderNav from '../../components/PageBorderNav';
import NavMenu from '../../components/NavMenu';
import PageTitle from '../../components/PageTitle';
import Form from './components/Form';

import { ContactContainer } from './styles';

import linkedinIcon from '../../assets/images/icons/linkedin.svg';
import githubIcon from '../../assets/images/icons/github.svg';
import instagramIcon from '../../assets/images/icons/instagram.svg';

function Contact() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  useEffect(() => {

    addScrollListener();

    return () => {

      removeScrollListener();
    };
  });

  return (

    <PageContainer id="page-container">
      <PageBorderNav
        borderSide="left"
        handleNavigation={handleNavigation}
        from="from-left"
        to="skills"
      >
        Skills
      </PageBorderNav>
      <PageView marginRight>
        <NavMenu />
        <button type="button" id="main-content">
          {' '}
        </button>
        <PageTitle className="no-select">Contact</PageTitle>
        <ContactContainer>
          <div className="socials">
            <a href="https://linkedin.com/in/stwgabriel" className="linkedin" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
            <a href="https://github.com/stwgabriel" className="github" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="Github Icon" />
            </a>
            <a href="https://instagram.com/stwgabriel" className="instagram" target="_blank" rel="noreferrer">
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
