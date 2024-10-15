import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2C3E50;
  padding: 2rem 0;
  color: white;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const FooterLinks = styled.div`
  margin-bottom: 1rem;

  a {
    color: #3498DB;
    text-decoration: none;
    margin: 0 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #2980B9;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <a href="/terms">이용약관</a>
          <a href="/privacy">개인정보처리방침</a>
          <a href="/faq">자주 묻는 질문</a>
        </FooterLinks>
        <p>&copy; 2024 BigMove. All rights reserved.</p>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
