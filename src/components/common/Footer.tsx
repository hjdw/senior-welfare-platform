import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: var(--primary-dark);
  color: white;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: var(--primary-light);
  }
  
  p {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  
  svg {
    color: var(--primary-light);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const AccessibilityInfo = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  
  h4 {
    color: var(--primary-light);
    margin-bottom: 0.5rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.3rem;
      padding-left: 1rem;
      position: relative;
      
      &:before {
        content: "•";
        color: var(--primary-light);
        position: absolute;
        left: 0;
      }
    }
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>고령층 복지시설 정보 플랫폼</h3>
            <p>
              고령화가 급속히 진행 중인 한국 사회에서 60대 이상 고령층이 
              요양병원, 요양원, 실버타운 등 복지시설에 대한 정보를 손쉽게 
              탐색하고 비교하며 접근할 수 있도록 개발된 플랫폼입니다.
            </p>
          </FooterSection>

          <FooterSection>
            <h3>연락처</h3>
            <ContactInfo>
              <FaPhone />
              <span>1588-1234</span>
            </ContactInfo>
            <ContactInfo>
              <FaEnvelope />
              <span>info@senior-welfare.kr</span>
            </ContactInfo>
            <ContactInfo>
              <FaMapMarkerAlt />
              <span>서울특별시 강남구 테헤란로 123</span>
            </ContactInfo>
          </FooterSection>

          <FooterSection>
            <h3>빠른 링크</h3>
            <p>• 시설 검색</p>
            <p>• 즐겨찾기</p>
            <p>• 시설 비교</p>
            <p>• 이용약관</p>
            <p>• 개인정보처리방침</p>
          </FooterSection>

          <FooterSection>
            <h3>웹 접근성</h3>
            <AccessibilityInfo>
              <h4>이 웹사이트는 다음 접근성 기능을 제공합니다:</h4>
              <ul>
                <li>고대비 색상 모드</li>
                <li>폰트 크기 조절</li>
                <li>키보드 네비게이션</li>
                <li>스크린 리더 호환</li>
                <li>터치 친화적 인터페이스</li>
              </ul>
            </AccessibilityInfo>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <p>
            © 2024 고령층 복지시설 정보 플랫폼. 모든 권리 보유. | 
            본 플랫폼은 통계청, 보건복지부, 한국정보화진흥원의 자료를 참고하여 제작되었습니다.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            <FaInfoCircle style={{ marginRight: '0.5rem' }} />
            이 웹사이트는 WCAG 2.1 웹 접근성 지침을 준수하여 제작되었습니다.
          </p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}; 