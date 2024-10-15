import React from 'react';

function DeliveryForm() {
  return (
    <div>
      <h2>배송 정보 입력</h2>
      <form>
        <label htmlFor="pickup">픽업 주소:</label>
        <input type="text" id="pickup" name="pickup" required />

        <label htmlFor="delivery">배송 주소:</label>
        <input type="text" id="delivery" name="delivery" required />

        <label htmlFor="itemType">물품 종류:</label>
        <input type="text" id="itemType" name="itemType" required />

        <label htmlFor="weight">무게 (kg):</label>
        <input type="number" id="weight" name="weight" required />

        <button type="submit">견적 요청</button>
      </form>
    </div>
  );
}

export default DeliveryForm;