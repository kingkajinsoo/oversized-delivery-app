import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.section`
  background-color: #F1F8FF;
  padding: 3rem 2rem;
  margin: 3rem 0;
  border-radius: 15px;
  text-align: center;
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  color: #2C3E50;
  margin-bottom: 1rem;
`;

const InfoContent = styled.p`
  font-size: 1.1rem;
  color: #34495E;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

function OversizedInfo() {
  return (
    <InfoContainer>
      <InfoTitle>이형화물이란?</InfoTitle>
      <InfoContent>
        이형화물은 일반적인 택배 서비스로 배송하기 어려운 크기나 무게를 가진 물품을 말합니다. 
        가구, 대형 가전제품, 피아노, 운동기구 등이 이에 해당합니다. 빅무브는 이러한 특수한 
        물품들을 안전하고 효율적으로 배송하는 서비스를 제공합니다.
      </InfoContent>
    </InfoContainer>
  );
}

export default OversizedInfo;

