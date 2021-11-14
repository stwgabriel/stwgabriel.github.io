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
      <PageBorder handleNavigation={handleNavigation} from="from-left" to="" />
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
      <PageBorder handleNavigation={handleNavigation} from="from-right" to="skills" />
    </PageContainer>
  );
}

export default Portfolio;
