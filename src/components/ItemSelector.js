import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.section`
  margin: 3rem 0;
`;

const ItemTitle = styled.h2`
  font-size: 2rem;
  color: #2C3E50;
  text-align: center;
  margin-bottom: 2rem;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`;

const ItemCard = styled.button`
  background-color: white;
  border: 2px solid #BDE0FE;
  border-radius: 20px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(52, 152, 219, 0.2);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const ItemIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const ItemName = styled.span`
  font-size: 1.1rem;
  color: #2C3E50;
  font-weight: 600;
`;

const items = {
  '침실/거실가구': [
    { name: '침대', icon: '/images/icons/bed.svg' },
    { name: '소파', icon: '/images/icons/sofa.svg' },
    { name: '옷장', icon: '/images/icons/wardrobe.svg' },
  ],
  '서재가구': [
    { name: '책상', icon: '/images/icons/desk.svg' },
    { name: '의자', icon: '/images/icons/chair.svg' },
    { name: '책장', icon: '/images/icons/bookshelf.svg' },
  ],
  // 다른 카테고리의 아이템들도 이와 같이 추가
};

function ItemSelector({ category, onSelectItem }) {
  return (
    <ItemContainer>
      <ItemTitle>{category} 세부 품목 선택</ItemTitle>
      <ItemGrid>
        {items[category].map((item) => (
          <ItemCard 
            key={item.name}
            onClick={() => onSelectItem(item.name)}
          >
            <ItemIcon src={item.icon} alt={item.name} />
            <ItemName>{item.name}</ItemName>
          </ItemCard>
        ))}
      </ItemGrid>
    </ItemContainer>
  );
}

export default ItemSelector;

