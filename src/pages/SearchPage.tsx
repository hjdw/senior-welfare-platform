import React, { useState } from 'react';
import styled from 'styled-components';
import { KakaoMap } from '../components/map/KakaoMap';
import { sampleFacilities } from '../data/sampleFacilities';
import { Facility } from '../types';

const SearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const SearchTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
  text-align: center;
`;

const SearchContent = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FilterSection = styled.aside`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  height: fit-content;
`;

const ResultsSection = styled.main`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
`;

const MapSection = styled.div`
  margin-top: 2rem;
  
  h3 {
    margin-bottom: 1rem;
    color: var(--text-primary);
  }
`;

const TestButton = styled.button`
  background: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;
  
  &:hover {
    background: var(--primary-dark);
  }
`;

const FacilityList = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
`;

const FacilityCard = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
    box-shadow: var(--shadow);
  }
  
  h4 {
    margin: 0 0 0.5rem 0;
    color: var(--text-primary);
  }
  
  p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
`;

export const SearchPage: React.FC = () => {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [showMap, setShowMap] = useState(false);

  const loadSampleData = () => {
    setFacilities(sampleFacilities);
    setShowMap(true);
  };

  const handleFacilityClick = (facility: Facility) => {
    alert(`${facility.name} 클릭됨!\n주소: ${facility.address}\n전화: ${facility.phone}`);
  };

  return (
    <SearchContainer>
      <SearchTitle>시설 검색</SearchTitle>
      
      <TestButton onClick={loadSampleData}>
        샘플 데이터 로드 (카카오 맵 테스트)
      </TestButton>
      
      <SearchContent>
        <FilterSection>
          <h2>검색 필터</h2>
          <p>필터 옵션이 여기에 표시됩니다.</p>
        </FilterSection>
        
        <ResultsSection>
          <h2>검색 결과 ({facilities.length}개)</h2>
          
          {facilities.length > 0 && (
            <FacilityList>
              {facilities.map(facility => (
                <FacilityCard 
                  key={facility.id}
                  onClick={() => handleFacilityClick(facility)}
                >
                  <h4>{facility.name}</h4>
                  <p>{facility.type} • {facility.address}</p>
                  <p>평점: ★ {facility.rating} ({facility.reviewCount}개 리뷰)</p>
                </FacilityCard>
              ))}
            </FacilityList>
          )}
          
          {showMap && facilities.length > 0 && (
            <MapSection>
              <h3>지도에서 보기</h3>
              <KakaoMap 
                facilities={facilities}
                onMarkerClick={handleFacilityClick}
              />
            </MapSection>
          )}
          
          {facilities.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '3rem 0' }}>
              "샘플 데이터 로드" 버튼을 클릭하여 카카오 맵을 테스트해보세요.
            </p>
          )}
        </ResultsSection>
      </SearchContent>
    </SearchContainer>
  );
}; 