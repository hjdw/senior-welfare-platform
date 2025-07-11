import React from 'react';
import styled from 'styled-components';

const ComparisonContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const ComparisonTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
  text-align: center;
`;

const ComparisonContent = styled.div`
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

export const ComparisonPage: React.FC = () => {
  return (
    <ComparisonContainer>
      <ComparisonTitle>시설 비교</ComparisonTitle>
      <ComparisonContent>
        <PlaceholderText>
          선택한 시설들의 비교 정보가 여기에 표시됩니다.
        </PlaceholderText>
      </ComparisonContent>
    </ComparisonContainer>
  );
}; 