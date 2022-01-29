import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { NavigationContext } from '../../contexts/NavigationContext';

import { addScrollListener, removeScrollListener } from '../../utils/smoothScroll';

import PageContainer from '../../components/PageContainer';
import PageView from '../../components/PageView';
import PageBorderNav from '../../components/PageBorderNav';
import NavMenu from '../../components/NavMenu';
import PageTitle from '../../components/PageTitle';
import Form from './components/Form';

import { ContactView } from './styles';

import linkedinIcon from '../../assets/images/icons/linkedin.svg';
import githubIcon from '../../assets/images/icons/github.svg';
import instagramIcon from '../../assets/images/icons/instagram.svg';
import LinkFree from '../../assets/images/icons/link-free.svg';
import Modal from '../../components/Modal';

function Contact() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;
  const [renderEmailSentModal, setRenderEmailSentModal] = useState(false);

  useEffect(() => {

    addScrollListener();

    return () => {

      removeScrollListener();
    };
  });

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/stwgabriel',
      image: linkedinIcon,
    },
    {
      name: 'Github',
      url: 'https://github.com/stwgabriel',
      image: githubIcon,
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/stwgabriel',
      image: instagramIcon,
    },
    {
      name: 'Link-Free',
      url: 'https://links.stwgabriel.space',
      image: LinkFree,
    },
  ];
  const modalLinks = [
    {
      id: uuidv4(),
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/stwgabriel',
    },
    {
      id: uuidv4(),
      name: 'Github',
      url: 'https://github.com/stwgabriel',
    },
    {
      id: uuidv4(),
      name: 'Instagram',
      url: 'https://instagram.com/stwgabriel',
    },
    {
      id: uuidv4(),
      name: 'Email',
      url: 'mailto:gabrielstw@pm.me',
    },
  ];

  function handleRenderEmailSentModal() {

    setRenderEmailSentModal(!renderEmailSentModal);
  }

  return (

    <PageContainer id="page-container">
      <Modal
        renderModal={renderEmailSentModal}
        handleRenderModal={() => handleRenderEmailSentModal()}
        title="Request received!"
        message={`
            You will receive a confirmation email in a few minutes,
            if you don’t receive it within 1 hour, please send the
            request again!
          `}
        subMessage="be aware that you can contact me by other ways like:"
        links={JSON.stringify(modalLinks)}
      />
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
        <button type="button" id="main-content" aria-hidden="true">
          {' '}
        </button>

        <PageTitle className="no-select">Contact</PageTitle>

        <ContactView>

          <div className="socials">

            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                title={link.name}
                className={link.name}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={link.image}
                  alt={`${link.name} Icon`}
                />
              </a>
            ))}
          </div>

          <span className="alternativeContactFormText">or</span>

          <Form handleRenderEmailSentModal={() => handleRenderEmailSentModal()} />

        </ContactView>
      </PageView>
    </PageContainer>
  );
}

export default Contact;
