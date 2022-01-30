import { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { NavigationContext } from '../../contexts/NavigationContext';

import { addScrollListener, removeScrollListener } from '../../utils/smoothScroll';

import PageContainer from '../../components/PageContainer';
import PageView from '../../components/PageView';
import PageBorderNav from '../../components/PageBorderNav';
import NavMenu from '../../components/NavMenu';
import PageTitle from '../../components/PageTitle';

import reactIcon from '../../assets/images/skills/react-icon.svg';
import javascriptIcon from '../../assets/images/skills/javascript-icon.svg';
import sassIcon from '../../assets/images/skills/sass-icon.svg';
import cssIcon from '../../assets/images/skills/css-icon.svg';
import htmlIcon from '../../assets/images/skills/html-icon.svg';
import gitIcon from '../../assets/images/skills/git-icon.svg';
import figmaIcon from '../../assets/images/skills/figma-icon.svg';
import typescriptIcon from '../../assets/images/skills/typescript-icon.svg';
import nodejsIcon from '../../assets/images/skills/nodejs-icon.svg';
import reduxIcon from '../../assets/images/skills/redux-icon.svg';
import nextjsIcon from '../../assets/images/skills/nextjs-icon.svg';
import swiftIcon from '../../assets/images/skills/swift-icon.svg';
import reactNativeIcon from '../../assets/images/skills/react-native-icon.svg';

import { SkillsPageView, SkillsContainer, XpContainer } from './styles';

function Skills() {

  const navigation = useContext(NavigationContext);
  const { handleNavigation } = navigation;

  const mainSkills = [

    { skillId: uuidv4(), skillImageUrl: reactIcon, skillName: 'React' },
    { skillId: uuidv4(), skillImageUrl: javascriptIcon, skillName: 'Javascript' },
    { skillId: uuidv4(), skillImageUrl: sassIcon, skillName: 'Sass' },
    { skillId: uuidv4(), skillImageUrl: cssIcon, skillName: 'CSS' },
    { skillId: uuidv4(), skillImageUrl: htmlIcon, skillName: 'HTML' },
    { skillId: uuidv4(), skillImageUrl: gitIcon, skillName: 'Git' },
    { skillId: uuidv4(), skillImageUrl: figmaIcon, skillName: 'Figma' },
  ];
  const learningSkills = [

    { skillId: uuidv4(), skillImageUrl: typescriptIcon, skillName: 'Typescript' },
    { skillId: uuidv4(), skillImageUrl: nodejsIcon, skillName: 'NodeJs' },
  ];
  const intendToLearnSkills = [
    { skillId: uuidv4(), skillImageUrl: reduxIcon, skillName: 'Redux' },
    { skillId: uuidv4(), skillImageUrl: nextjsIcon, skillName: 'NextJs' },
    { skillId: uuidv4(), skillImageUrl: swiftIcon, skillName: 'Swift' },
    { skillId: uuidv4(), skillImageUrl: reactNativeIcon, skillName: 'React Native' },
  ];

  useEffect(() => { addScrollListener(); return () => { removeScrollListener(); }; });

  return (

    <PageContainer id="page-container">

      <PageBorderNav
        borderSide="left"
        handleNavigation={handleNavigation}
        from="from-left"
        to="portfolio"
      >
        Portfolio
      </PageBorderNav>

      <PageView>

        <NavMenu />

        <button type="button" id="main-content" aria-hidden="true">
          {' '}
        </button>

        <PageTitle className="no-select">Skills &amp; Xp</PageTitle>

        <SkillsPageView>

          <SkillsContainer>

            <h2>Main Skills</h2>
            <div className="skillsRow">
              {mainSkills.map(({ skillId, skillName, skillImageUrl }) => (

                <code key={skillId}>
                  <img
                    title={skillName}
                    src={skillImageUrl}
                    alt={`${skillName} icon`}
                  />
                </code>
              ))}
            </div>

            <h2>Currently learning</h2>
            <div className="skillsRow">
              {learningSkills.map(({ skillId, skillName, skillImageUrl }) => (

                <code key={skillId}>
                  <img
                    title={skillName}
                    src={skillImageUrl}
                    alt={`${skillName} icon`}
                  />
                </code>
              ))}
            </div>

            <h2>I&lsquo;ll learn</h2>
            <div className="skillsRow">
              {intendToLearnSkills.map(({ skillId, skillName, skillImageUrl }) => (

                <code key={skillId}>
                  <img
                    title={skillName}
                    src={skillImageUrl}
                    alt={`${skillName} icon`}
                  />
                </code>
              ))}
            </div>
          </SkillsContainer>

          <XpContainer>
            <h2>My Xp</h2>
            <p>
              Since I started my journey as a Front-end student almost 3 years ago,
              I have learned a lot about and done some good personal projects and now
              I am looking for an opportunity to use what I have learned and learn
              more with a good team.
              <br />
              <br />
              All my projects are available on my Github profile and if you think
              I can be part of your team and we can team up you can
              contact me on the contact page.
            </p>
          </XpContainer>
        </SkillsPageView>
      </PageView>

      <PageBorderNav
        borderSide="right"
        handleNavigation={handleNavigation}
        from="from-right"
        to="contact"
      >
        Contact
      </PageBorderNav>
    </PageContainer>
  );
}

export default Skills;
