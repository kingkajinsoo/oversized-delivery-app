import React from 'react';
import styled from 'styled-components';

const CategoryContainer = styled.section`
  margin: 3rem 0;
`;

const CategoryTitle = styled.h2`
  font-size: 2rem;
  color: #2C3E50;
  text-align: center;
  margin-bottom: 2rem;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`;

const CategoryCard = styled.button`
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

const CategoryIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const CategoryName = styled.span`
  font-size: 1.1rem;
  color: #2C3E50;
  font-weight: 600;
`;

const categories = [
  { name: '침실/거실가구', icon: '/images/icons/bedroom_living.svg' },
  { name: '서재가구', icon: '/images/icons/bedroom_living.svg' },
  { name: '디지털/생활가전', icon: '/images/icons/bedroom_living.svg' },
  { name: '주방가전', icon: '/images/icons/bedroom_living.svg' },
  { name: '운동기구', icon: '/images/icons/bedroom_living.svg' },
  { name: '기타', icon: '/images/icons/bedroom_living.svg' },
];

function CategorySelector({ onSelectCategory }) {
  return (
    <CategoryContainer>
      <CategoryTitle>배송할 물품 선택</CategoryTitle>
      <CategoryGrid>
        {categories.map((category) => (
          <CategoryCard 
            key={category.name}
            onClick={() => onSelectCategory(category.name)}
          >
            <CategoryIcon src={category.icon} alt={category.name} />
            <CategoryName>{category.name}</CategoryName>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </CategoryContainer>
  );
}

export default CategorySelector;
