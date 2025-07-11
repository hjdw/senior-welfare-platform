import React from 'react';
import styled from 'styled-components';

const FavoritesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const FavoritesTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
  text-align: center;
`;

const FavoritesContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
`;

const PlaceholderText = styled.p`
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  padding: 3rem 0;
`;

export const FavoritesPage: React.FC = () => {
  return (
    <FavoritesContainer>
      <FavoritesTitle>즐겨찾기</FavoritesTitle>
      <FavoritesContent>
        <PlaceholderText>
          저장한 시설 목록이 여기에 표시됩니다.
        </PlaceholderText>
      </FavoritesContent>
    </FavoritesContainer>
  );
}; 