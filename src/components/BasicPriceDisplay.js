import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #F8F9FA;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #2C3E50;
  margin-bottom: 1.5rem;
`;

const SelectionSummary = styled.div`
  margin-bottom: 1.5rem;
`;

const PriceDisplay = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #3498DB;
  margin-bottom: 1.5rem;
`;

const NextButton = styled.button`
  background-color: #3498DB;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
`;

function BasicPriceDisplay({ selections, basicPrice, onNext }) {
  return (
    <Container>
      <Title>선택 내용 및 기본 가격</Title>
      <SelectionSummary>
        <p>카테고리: {selections.category}</p>
        <p>품목: {selections.item}</p>
        <p>크기: {selections.size}</p>
        <p>무게: {selections.weight}</p>
        <p>수량: {selections.quantity}</p>
        <p>특수 취급: {selections.specialHandling}</p>
      </SelectionSummary>
      <PriceDisplay>기본 가격: {basicPrice.toLocaleString()}원</PriceDisplay>
      <NextButton onClick={onNext}>주소 선택하기</NextButton>
    </Container>
  );
}

export default BasicPriceDisplay;

