import React, { useState } from 'react';
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

const OptionGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const OptionText = styled.span`
  font-size: 1rem;
  color: #34495E;
`;

const OptionPrice = styled.span`
  font-size: 0.9rem;
  color: #3498DB;
  margin-left: auto;
`;

const TotalCost = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #2C3E50;
  margin-top: 1rem;
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

const additionalOptions = [
  { id: 'ladder', label: '사다리차 사용', price: 50000 },
  { id: 'packing', label: '포장 서비스', price: 30000 },
  { id: 'disassembly', label: '가구 분해/조립', price: 40000 },
  { id: 'piano', label: '피아노 운반', price: 100000 },
];

function AdditionalOptionsSelector({ basicCost, onNext }) {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (optionId) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionId]: !prev[optionId]
    }));
  };

  const calculateTotalCost = () => {
    const additionalCost = Object.entries(selectedOptions)
      .reduce((total, [optionId, isSelected]) => {
        if (isSelected) {
          const option = additionalOptions.find(opt => opt.id === optionId);
          return total + option.price;
        }
        return total;
      }, 0);
    return basicCost + additionalCost;
  };

  const handleNext = () => {
    onNext(selectedOptions, calculateTotalCost());
  };

  return (
    <Container>
      <Title>추가 옵션 선택</Title>
      {additionalOptions.map(option => (
        <OptionGroup key={option.id}>
          <OptionLabel>
            <Checkbox
              type="checkbox"
              checked={selectedOptions[option.id] || false}
              onChange={() => handleOptionChange(option.id)}
            />
            <OptionText>{option.label}</OptionText>
            <OptionPrice>+{option.price.toLocaleString()}원</OptionPrice>
          </OptionLabel>
        </OptionGroup>
      ))}
      <TotalCost>총 비용: {calculateTotalCost().toLocaleString()}원</TotalCost>
      <NextButton onClick={handleNext}>주문 확인</NextButton>
    </Container>
  );
}

export default AdditionalOptionsSelector;

