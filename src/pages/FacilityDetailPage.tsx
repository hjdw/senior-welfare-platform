import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const DetailTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
`;

const DetailContent = styled.div`
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

export const FacilityDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <DetailContainer>
      <DetailTitle>시설 상세 정보</DetailTitle>
      <DetailContent>
        <PlaceholderText>
          시설 ID: {id}의 상세 정보가 여기에 표시됩니다.
        </PlaceholderText>
      </DetailContent>
    </DetailContainer>
  );
}; 