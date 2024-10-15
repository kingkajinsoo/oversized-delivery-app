import React, { useState } from 'react';
import styled from 'styled-components';
import CategorySelector from './CategorySelector';
import ItemSelector from './ItemSelector';
import DetailForm from './DetailForm';
import BasicPriceDisplay from './BasicPriceDisplay';
import AddressSelector from './AddressSelector';
import DeliveryDateSelector from './DeliveryDateSelector';
import DistanceDisplay from './DistanceDisplay';
import AdditionalOptionsSelector from './AdditionalOptionsSelector';
import OrderSummary from './OrderSummary';

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.section`
  text-align: center;
  margin-bottom: 3rem;
`;

const Headline = styled.h1`
  font-size: 3rem;
  color: #2C3E50;
  margin-bottom: 1rem;
`;

const Subheadline = styled.p`
  font-size: 1.5rem;
  color: #34495E;
`;

const InfoSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const InfoCard = styled.div`
  background-color: #F8F9FA;
  border-radius: 10px;
  padding: 1.5rem;
  width: 30%;
  text-align: center;
`;

const InfoIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  color: #2C3E50;
  margin-bottom: 0.5rem;
`;

const InfoDescription = styled.p`
  font-size: 1rem;
  color: #34495E;
`;

const BackButton = styled.button`
  background-color: #3498DB;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    background-color: #2980B9;
  }
`;

function MainPage() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState(null);
  const [basicPrice, setBasicPrice] = useState(0);
  const [addresses, setAddresses] = useState(null);
  const [distance, setDistance] = useState(0);
  const [additionalDistanceCost, setAdditionalDistanceCost] = useState(0);
  const [additionalOptions, setAdditionalOptions] = useState({});
  const [totalCost, setTotalCost] = useState(0);
  const [deliveryDates, setDeliveryDates] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setStep(2);
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setStep(3);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    // 여기에서 기본 가격을 계산하는 로직을 추가하세요
    const calculatedPrice = calculateBasicPrice(selectedCategory, selectedItem, data);
    setBasicPrice(calculatedPrice);
    setStep(4);
  };

  const handleNextAfterBasicPrice = () => {
    setStep(5); // 주소 선택 단계로 이동
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      if (step === 2) {
        setSelectedCategory(null);
      } else if (step === 3) {
        setSelectedItem(null);
      } else if (step === 4) {
        setFormData(null);
      }
    }
  };

  const handleAddressSelect = (addressData) => {
    setAddresses(addressData);
    setStep(6); // 희망 배송일자 선택 단계로 이동
  };

  const handleDeliveryDateSelect = (dateData) => {
    setDeliveryDates(dateData);
    // 여기에서 거리 계산 및 추가 비용 계산 로직을 구현해야 합니다.
    const calculatedDistance = calculateDistance(addresses.pickupAddress, addresses.deliveryAddress);
    setDistance(calculatedDistance);
    const additionalCost = calculateAdditionalCost(calculatedDistance);
    setAdditionalDistanceCost(additionalCost);
    setStep(7); // 거리 확인 단계로 이동
  };

  const handleNextAfterDistance = () => {
    setStep(8);
  };

  const handleAdditionalOptions = (options, finalCost) => {
    setAdditionalOptions(options);
    setTotalCost(finalCost);
    setStep(9);
  };

  const handleConfirmOrder = () => {
    // 여기에 주문 확정 로직을 구현하세요 (예: 서버로 데이터 전송)
    alert('주문이 확정되었습니다. 감사합니다!');
    // 주문 완료 후 초기 상태로 리셋
    setStep(1);
    setSelectedCategory(null);
    setSelectedItem(null);
    setFormData(null);
    setBasicPrice(0);
    setAddresses(null);
    setDistance(0);
    setAdditionalDistanceCost(0);
    setAdditionalOptions({});
    setTotalCost(0);
  };

  // 기본 가격 계산 함수 (실제 로직으로 대체해야 함)
  const calculateBasicPrice = (category, item, details) => {
    // 여기에 실제 기본 가격 계산 로직을 구현하세요
    return 50000; // 예시 금액
  };

  // 거리 계산 함수 (실제 로직으로 대체해야 함)
  const calculateDistance = (pickup, delivery) => {
    // 여기에 실제 거리 계산 로직을 구현하세요 (예: Google Maps API 사용)
    return 50; // 예시 거리 (km)
  };

  // 추가 비용 계산 함수 (실제 로직으로 대체해야 함)
  const calculateAdditionalCost = (distance) => {
    // 여기에 실제 추가 비용 계산 로직을 구현하세요
    const baseDistance = 30; // 예: 기본 거리 30km
    const additionalDistance = Math.max(0, distance - baseDistance);
    const costPerKm = 1000; // 예: km당 1000원
    return additionalDistance * costPerKm;
  };

  return (
    <MainContainer>
      <Hero>
        <Headline>대형 물품 배송, 빅무브와 함께</Headline>
        <Subheadline>이형화물 배송 서비스로 안전하고 편리하게 대형 물품을 옮기세요</Subheadline>
      </Hero>
      
      {step === 1 && <CategorySelector onSelectCategory={handleCategorySelect} />}
      {step === 2 && <ItemSelector category={selectedCategory} onSelectItem={handleItemSelect} />}
      {step === 3 && (
        <DetailForm
          category={selectedCategory}
          item={selectedItem}
          onSubmit={handleFormSubmit}
        />
      )}
      {step === 4 && (
        <BasicPriceDisplay
          selections={{category: selectedCategory, item: selectedItem, ...formData}}
          basicPrice={basicPrice}
          onNext={handleNextAfterBasicPrice}
        />
      )}
      {step === 5 && <AddressSelector onNext={handleAddressSelect} />}
      {step === 6 && <DeliveryDateSelector onNext={handleDeliveryDateSelect} />}
      {step === 7 && (
        <DistanceDisplay
          addresses={addresses}
          distance={distance}
          basicPrice={basicPrice}
          additionalDistanceCost={additionalDistanceCost}
          onNext={handleNextAfterDistance}
        />
      )}
      {step === 8 && (
        <AdditionalOptionsSelector
          basicCost={basicPrice + additionalDistanceCost}
          onNext={handleAdditionalOptions}
        />
      )}
      {step === 9 && (
        <OrderSummary
          orderDetails={{
            category: selectedCategory,
            item: selectedItem,
            formData,
            addresses,
            deliveryDates,
            distance,
            basicPrice,
            additionalDistanceCost,
            additionalOptions,
            totalCost,
          }}
          onConfirm={handleConfirmOrder}
        />
      )}
      
      {step > 1 && step < 9 && <BackButton onClick={handleBack}>이전 단계로</BackButton>}
    </MainContainer>
  );
}

export default MainPage;
