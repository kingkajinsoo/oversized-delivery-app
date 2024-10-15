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

const AddressInfo = styled.div`
  margin-bottom: 1rem;
`;

const DistanceInfo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #3498DB;
  margin-bottom: 1rem;
`;

const CostBreakdown = styled.div`
  margin-bottom: 1.5rem;
`;

const CostItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const TotalCost = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #2C3E50;
  margin-top: 1rem;
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

function DistanceDisplay({ addresses, distance, basicPrice, additionalDistanceCost, onNext }) {
  const totalCost = basicPrice + additionalDistanceCost;

  return (
    <Container>
      <Title>거리 및 비용 확인</Title>
      <AddressInfo>
        <p>상차지: {addresses.pickupAddress}</p>
        <p>하차지: {addresses.deliveryAddress}</p>
      </AddressInfo>
      <DistanceInfo>총 거리: {distance} km</DistanceInfo>
      <CostBreakdown>
        <CostItem>
          <span>기본 운반비 (기본 거리 포함):</span>
          <span>{basicPrice.toLocaleString()}원</span>
        </CostItem>
        <CostItem>
          <span>추가 거리 비용:</span>
          <span>{additionalDistanceCost.toLocaleString()}원</span>
        </CostItem>
        <TotalCost>
          <span>총 비용:</span>
          <span>{totalCost.toLocaleString()}원</span>
        </TotalCost>
      </CostBreakdown>
      <NextButton onClick={onNext}>추가 옵션 선택하기</NextButton>
    </Container>
  );
}

export default DistanceDisplay;

