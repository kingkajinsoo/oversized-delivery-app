import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #F8F9FA;
  border-radius: 10px;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  color: #2C3E50;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const OptionGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const OptionTitle = styled.h3`
  font-size: 1.2rem;
  color: #34495E;
  margin-bottom: 1rem;
`;

const OptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const OptionButton = styled.button`
  background-color: ${props => props.selected ? '#3498DB' : '#ECF0F1'};
  color: ${props => props.selected ? 'white' : '#2C3E50'};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.selected ? '#2980B9' : '#BDC3C7'};
  }
`;

const SubmitButton = styled.button`
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

const options = {
  size: ['소형', '중형', '대형'],
  weight: ['50kg 미만', '50-100kg', '100kg 이상'],
  quantity: ['1개', '2개', '3개 이상'],
  specialHandling: ['필요 없음', '필요함'],
};

function DetailForm({ category, item, onSubmit }) {
  const [selectedOptions, setSelectedOptions] = useState({
    size: null,
    weight: null,
    quantity: null,
    specialHandling: null,
  });

  const handleOptionSelect = (optionType, value) => {
    setSelectedOptions(prev => ({ ...prev, [optionType]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(selectedOptions).every(option => option !== null)) {
      onSubmit(selectedOptions);
    } else {
      alert('모든 옵션을 선택해주세요.');
    }
  };

  return (
    <FormContainer>
      <FormTitle>{category} - {item} 상세 정보</FormTitle>
      <form onSubmit={handleSubmit}>
        {Object.entries(options).map(([optionType, optionValues]) => (
          <OptionGroup key={optionType}>
            <OptionTitle>{optionType === 'specialHandling' ? '특수 취급' : optionType}</OptionTitle>
            <OptionList>
              {optionValues.map(value => (
                <OptionButton
                  key={value}
                  selected={selectedOptions[optionType] === value}
                  onClick={() => handleOptionSelect(optionType, value)}
                  type="button"
                >
                  {value}
                </OptionButton>
              ))}
            </OptionList>
          </OptionGroup>
        ))}
        <SubmitButton type="submit">제출</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default DetailForm;
