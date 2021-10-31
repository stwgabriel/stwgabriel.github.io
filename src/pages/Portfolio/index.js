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
      <Link onClick={handleNavigation} className="page-border from-left toHome" to="/">
        <img className="arrow" src={arrow} alt="arrow" />
        <span>Home</span>
      </Link>
      <Content>
        <br />
        <br />
        <br />
        <h1> Portfolio </h1>

        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius
          eligendi impedit aliquam nostrum? Tenetur ipsum commodi, ducimus
          aliquid quibusdam ipsa magnam consequatur perferendis sint necess
          itatibus nesciunt quisquam pariatur officia.

        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius
          eligendi impedit aliquam nostrum? Tenetur ipsum commodi, ducimus al
          iquid quibusdam ipsa magnam consequatur perferendis sint necessitatibu
          s nesciunt quisquam pariatur officia.

        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius
          eligendi impedit aliquam nostrum? Tenetur ipsum commodi, ducimus a
          liquid quibusdam ipsa magnam consequatur perferendis sint necessitati
          bus nesciunt quisquam pariatur officia.

        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius
          eligendi impedit aliquam nostrum? Tenetur ipsum commodi, ducimus aliq
          uid quibusdam ipsa magnam consequatur perferendis sint necessitatib
          nesciunt quisquam pariatur officia.

        </p>
        <br />
      </Content>
      <Link onClick={handleNavigation} className="page-border from-right toSkills" to="/skills">
        <img src={arrow} alt="arrow" />
        <span>Skills</span>
      </Link>
    </PageContainer>
  );
}

export default Portfolio;
