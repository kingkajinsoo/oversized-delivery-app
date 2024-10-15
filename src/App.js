import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito', 'Noto Sans KR', sans-serif;
    background-color: #F8F9FA;
    color: #2C3E50;
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* 추후 다른 라우트를 여기에 추가할 예정입니다 */}
          </Routes>
        </Content>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
