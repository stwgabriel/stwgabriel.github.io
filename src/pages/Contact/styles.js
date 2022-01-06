import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3vw;

  .socials {
    display: flex;

    a {
      border-radius: ${({ theme }) => theme.metric.borderRadius};
      
      display: flex;
      align-items: center;

      padding: .8vw;

      &:first-child {
        background: ${({ theme }) => theme.color.social.linkedin};
      }

      &:nth-child(2) {
        background: ${({ theme }) => theme.color.social.github};
        margin: 0 1.4vw;
      }

      &:last-child {
        background: ${({ theme }) => theme.color.social.instagram};
      }
    }
  }

  span {
    font-size: 1.2vw;
    
    margin: 2vw 0;
  }
`;

const FormContainer = styled.form``;

export { ContactContainer, FormContainer };
