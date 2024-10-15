import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

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

const DateSelection = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #34495E;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #BDC3C7;
  border-radius: 5px;
  font-size: 1rem;
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

function DeliveryDateSelector({ onNext }) {
  const [pickupDate, setPickupDate] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);

  const handleNext = () => {
    if (pickupDate && deliveryDate) {
      onNext({ pickupDate, deliveryDate });
    } else {
      alert('상차일과 하차일을 모두 선택해주세요.');
    }
  };

  return (
    <Container>
      <Title>희망 배송일자 선택</Title>
      <DateSelection>
        <Label>상차일 (물건을 실을 날짜)</Label>
        <StyledDatePicker
          selected={pickupDate}
          onChange={date => setPickupDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}
          placeholderText="상차일을 선택하세요"
        />
      </DateSelection>
      <DateSelection>
        <Label>하차일 (물건을 내릴 날짜)</Label>
        <StyledDatePicker
          selected={deliveryDate}
          onChange={date => setDeliveryDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={pickupDate || new Date()}
          placeholderText="하차일을 선택하세요"
        />
      </DateSelection>
      <NextButton onClick={handleNext}>다음</NextButton>
    </Container>
  );
}

export default DeliveryDateSelector;

