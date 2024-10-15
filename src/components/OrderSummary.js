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

const SummarySection = styled.div`
  margin-bottom: 1.5rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SummaryLabel = styled.span`
  font-weight: bold;
  color: #34495E;
`;

const SummaryValue = styled.span`
  color: #2C3E50;
`;

const TotalCost = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #2C3E50;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const ConfirmButton = styled.button`
  background-color: #3498DB;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
`;

function OrderSummary({ orderDetails, onConfirm }) {
  const {
    category,
    item,
    formData,
    addresses,
    deliveryDates,
    distance,
    basicPrice,
    additionalDistanceCost,
    additionalOptions,
    totalCost,
  } = orderDetails;

  return (
    <Container>
      <Title>주문 요약</Title>
      <SummarySection>
        <SummaryItem>
          <SummaryLabel>카테고리:</SummaryLabel>
          <SummaryValue>{category}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>품목:</SummaryLabel>
          <SummaryValue>{item}</SummaryValue>
        </SummaryItem>
        {Object.entries(formData).map(([key, value]) => (
          <SummaryItem key={key}>
            <SummaryLabel>{key}:</SummaryLabel>
            <SummaryValue>{value}</SummaryValue>
          </SummaryItem>
        ))}
      </SummarySection>
      <SummarySection>
        <SummaryItem>
          <SummaryLabel>상차지:</SummaryLabel>
          <SummaryValue>{addresses.pickupAddress}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>하차지:</SummaryLabel>
          <SummaryValue>{addresses.deliveryAddress}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>상차일:</SummaryLabel>
          <SummaryValue>{deliveryDates.pickupDate.toLocaleDateString()}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>하차일:</SummaryLabel>
          <SummaryValue>{deliveryDates.deliveryDate.toLocaleDateString()}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>총 거리:</SummaryLabel>
          <SummaryValue>{distance} km</SummaryValue>
        </SummaryItem>
      </SummarySection>
      <SummarySection>
        <SummaryItem>
          <SummaryLabel>기본 운반비:</SummaryLabel>
          <SummaryValue>{basicPrice.toLocaleString()}원</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>추가 거리 비용:</SummaryLabel>
          <SummaryValue>{additionalDistanceCost.toLocaleString()}원</SummaryValue>
        </SummaryItem>
        {Object.entries(additionalOptions).map(([option, isSelected]) => (
          isSelected && (
            <SummaryItem key={option}>
              <SummaryLabel>{option}:</SummaryLabel>
              <SummaryValue>선택됨</SummaryValue>
            </SummaryItem>
          )
        ))}
      </SummarySection>
      <TotalCost>총 비용: {totalCost.toLocaleString()}원</TotalCost>
      <ConfirmButton onClick={onConfirm}>주문 확정</ConfirmButton>
    </Container>
  );
}

export default OrderSummary;
