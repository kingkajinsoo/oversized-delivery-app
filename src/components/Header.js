import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2C3E50;
  padding: 1rem;
  color: white;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: #3498DB;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-left: 2rem;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #3498DB;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>BigMove</Logo>
        <Nav>
          <ul>
            <li><a href="/">홈</a></li>
            <li><a href="/about">서비스 소개</a></li>
            <li><a href="/contact">문의하기</a></li>
          </ul>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
