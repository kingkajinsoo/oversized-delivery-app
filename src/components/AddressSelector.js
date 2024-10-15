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

const AddressInput = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #34495E;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #BDC3C7;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  background-color: #3498DB;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 0.5rem;
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

function AddressSelector({ onNext }) {
  const [pickupAddress, setPickupAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleSearchAddress = (type) => {
    // 여기에 주소 검색 로직을 구현하세요
    // 예: 카카오 주소 검색 API 사용
    alert(`${type} 주소 검색 기능을 구현해주세요.`);
  };

  const handleNext = () => {
    if (pickupAddress && deliveryAddress) {
      onNext({ pickupAddress, deliveryAddress });
    } else {
      alert('상차지와 하차지 주소를 모두 입력해주세요.');
    }
  };

  return (
    <Container>
      <Title>주소 선택</Title>
      <AddressInput>
        <Label>상차지 (물건 실을 곳)</Label>
        <Input 
          type="text" 
          value={pickupAddress} 
          onChange={(e) => setPickupAddress(e.target.value)}
          placeholder="상차지 주소"
        />
        <SearchButton onClick={() => handleSearchAddress('pickup')}>주소 검색</SearchButton>
      </AddressInput>
      <AddressInput>
        <Label>하차지 (물건 내릴 곳)</Label>
        <Input 
          type="text" 
          value={deliveryAddress} 
          onChange={(e) => setDeliveryAddress(e.target.value)}
          placeholder="하차지 주소"
        />
        <SearchButton onClick={() => handleSearchAddress('delivery')}>주소 검색</SearchButton>
      </AddressInput>
      <NextButton onClick={handleNext}>거리 확인</NextButton>
    </Container>
  );
}

export default AddressSelector;

