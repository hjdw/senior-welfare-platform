import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch, FaHeart, FaBalanceScale, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import { useFavorites } from '../../contexts/FavoriteContext';
import { useAccessibility } from '../../contexts/AccessibilityContext';

const HeaderContainer = styled.header`
  background: var(--background-white);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: var(--primary-dark);
  }
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? 'var(--primary-color)' : 'var(--text-primary)'};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? '600' : '400'};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  
  &:hover {
    background: var(--background-light);
    color: var(--primary-color);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  min-height: 48px;
  min-width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: var(--background-light);
    color: var(--primary-color);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: var(--secondary-color);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: var(--background-white);
    box-shadow: var(--shadow);
    padding: 1rem;
    z-index: 999;
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: 1rem;
  color: var(--text-primary);
  text-decoration: none;
  border-bottom: 1px solid var(--border-color);
  font-size: 1.1rem;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: var(--background-light);
    color: var(--primary-color);
  }
`;

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { favorites, comparisonItems } = useFavorites();
  const { settings, toggleHighContrast, changeFontSize } = useAccessibility();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/" onClick={closeMobileMenu}>
          <LogoIcon>복</LogoIcon>
          <span>고령층 복지시설</span>
        </Logo>

        <Navigation>
          <NavLink to="/" $isActive={location.pathname === '/'}>
            홈
          </NavLink>
          <NavLink to="/search" $isActive={location.pathname === '/search'}>
            시설 검색
          </NavLink>
          <NavLink to="/favorites" $isActive={location.pathname === '/favorites'}>
            즐겨찾기
          </NavLink>
          <NavLink to="/comparison" $isActive={location.pathname === '/comparison'}>
            시설 비교
          </NavLink>
        </Navigation>

        <ActionButtons>
          <ActionButton
            onClick={() => changeFontSize(settings.fontSize === 'normal' ? 'large' : 'normal')}
            aria-label="폰트 크기 변경"
          >
            A
          </ActionButton>
          
          <ActionButton
            onClick={toggleHighContrast}
            aria-label="고대비 모드 토글"
          >
            <FaCog />
          </ActionButton>

          <ActionButton as={Link} to="/favorites" aria-label="즐겨찾기">
            <FaHeart />
            {favorites.length > 0 && <Badge>{favorites.length}</Badge>}
          </ActionButton>

          <ActionButton as={Link} to="/comparison" aria-label="시설 비교">
            <FaBalanceScale />
            {comparisonItems.length > 0 && <Badge>{comparisonItems.length}</Badge>}
          </ActionButton>

          <MobileMenuButton onClick={toggleMobileMenu} aria-label="메뉴 열기">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </ActionButtons>
      </HeaderContent>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNavLink to="/" onClick={closeMobileMenu}>
          홈
        </MobileNavLink>
        <MobileNavLink to="/search" onClick={closeMobileMenu}>
          시설 검색
        </MobileNavLink>
        <MobileNavLink to="/favorites" onClick={closeMobileMenu}>
          즐겨찾기 ({favorites.length})
        </MobileNavLink>
        <MobileNavLink to="/comparison" onClick={closeMobileMenu}>
          시설 비교 ({comparisonItems.length})
        </MobileNavLink>
      </MobileMenu>
    </HeaderContainer>
  );
}; 