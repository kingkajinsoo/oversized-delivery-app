import React from 'react';
import styled from 'styled-components';

const FeeContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #F8F9FA;
  border-radius: 10px;
  text-align: center;
`;

const FeeTitle = styled.h2`
  font-size: 1.5rem;
  color: #2C3E50;
  margin-bottom: 1.5rem;
`;

const FeeAmount = styled.div`
  font-size: 2rem;
  color: #3498DB;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const FeeDescription = styled.p`
  color: #34495E;
  margin-bottom: 1.5rem;
`;

const ContinueButton = styled.button`
  background-color: #3498DB;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;

  &:hover {
    background-color: #2980B9;
  }
`;

function BasicFeeDisplay({ category, item, details, basicFee, onContinue }) {
  return (
    <FeeContainer>
      <FeeTitle>기본 운반비</FeeTitle>
      <FeeAmount>₩{basicFee.toLocaleString()}</FeeAmount>
      <FeeDescription>
        선택하신 {category} - {item}의 기본 운반비입니다. 
        추가 옵션 선택에 따라 최종 금액이 변경될 수 있습니다.
      </FeeDescription>
      <ContinueButton onClick={onContinue}>계속 진행하기</ContinueButton>
    </FeeContainer>
  );
}

export default BasicFeeDisplay;

