import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaBalanceScale, FaMapMarkerAlt, FaStar, FaUsers, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SearchBox = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow);
  max-width: 600px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
`;

const SearchButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 0;
  background: var(--background-light);
`;

const FeaturesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: var(--shadow-hover);
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 2rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const StatsSection = styled.section`
  padding: 4rem 0;
  background: var(--primary-color);
  color: white;
`;

const StatsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatCard = styled(motion.div)`
  h3 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--primary-light);
  }
  
  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: var(--secondary-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #E65100;
    transform: translateY(-2px);
  }
`;

export const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>고령층 복지시설 정보 플랫폼</HeroTitle>
            <HeroSubtitle>
              요양병원, 요양원, 실버타운 등 복지시설을 쉽게 찾고 비교해보세요
            </HeroSubtitle>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SearchBox>
              <SearchInput 
                type="text" 
                placeholder="지역명 또는 시설명을 입력하세요 (예: 서울 강남구, 요양병원)"
                aria-label="시설 검색"
              />
              <SearchButton to="/search">
                <FaSearch />
                시설 검색하기
              </SearchButton>
            </SearchBox>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <FeaturesContent>
          <SectionTitle>주요 기능</SectionTitle>
          <FeaturesGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>
                <FaMapMarkerAlt />
              </FeatureIcon>
              <FeatureTitle>위치 기반 검색</FeatureTitle>
              <FeatureDescription>
                Kakao Map API를 활용한 정확한 위치 기반 검색으로 
                가까운 복지시설을 쉽게 찾을 수 있습니다.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>
                <FaHeart />
              </FeatureIcon>
              <FeatureTitle>즐겨찾기 기능</FeatureTitle>
              <FeatureDescription>
                관심 있는 시설을 즐겨찾기에 저장하여 
                나중에 쉽게 확인할 수 있습니다.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>
                <FaBalanceScale />
              </FeatureIcon>
              <FeatureTitle>시설 비교</FeatureTitle>
              <FeatureDescription>
                여러 시설을 한 번에 비교하여 
                가장 적합한 시설을 선택할 수 있습니다.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>
                <FaStar />
              </FeatureIcon>
              <FeatureTitle>상세 정보</FeatureTitle>
              <FeatureDescription>
                시설의 상세 정보, 서비스, 가격, 
                접근성 정보를 한눈에 확인할 수 있습니다.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>
                <FaPhone />
              </FeatureIcon>
              <FeatureTitle>직접 연락</FeatureTitle>
              <FeatureDescription>
                시설에 직접 전화하거나 
                방문 예약을 할 수 있습니다.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <FeatureIcon>
                <FaUsers />
              </FeatureIcon>
              <FeatureTitle>고령층 친화적</FeatureTitle>
              <FeatureDescription>
                WCAG 2.1 지침을 준수한 
                고령층 친화적 인터페이스를 제공합니다.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesContent>
      </FeaturesSection>

      <StatsSection>
        <StatsContent>
          <SectionTitle style={{ color: 'white' }}>통계 현황</SectionTitle>
          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>1,234</h3>
              <p>등록된 복지시설</p>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>4.8</h3>
              <p>평균 평점</p>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>15,678</h3>
              <p>이용자 수</p>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>98%</h3>
              <p>만족도</p>
            </StatCard>
          </StatsGrid>
          
          <CTAButton to="/search">
            지금 바로 시설 검색하기
          </CTAButton>
        </StatsContent>
      </StatsSection>
    </HomeContainer>
  );
}; 