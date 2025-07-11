import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    color: #333;
    background-color: #f8f9fa;
    font-size: 18px; /* 고령층을 위한 큰 폰트 크기 */
  }

  /* 고령층 친화적 색상 및 대비 */
  :root {
    --primary-color: #2E7D32;
    --primary-light: #4CAF50;
    --primary-dark: #1B5E20;
    --secondary-color: #FF6F00;
    --text-primary: #212121;
    --text-secondary: #757575;
    --background-light: #f8f9fa;
    --background-white: #ffffff;
    --border-color: #e0e0e0;
    --success-color: #4CAF50;
    --warning-color: #FF9800;
    --error-color: #F44336;
    --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  /* 웹 접근성을 위한 스킵 링크 */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--primary-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
    font-size: 16px;
  }

  .skip-link:focus {
    top: 6px;
  }

  /* 포커스 스타일 개선 */
  *:focus {
    outline: 3px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* 버튼 스타일 */
  button {
    font-family: inherit;
    font-size: 18px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    transition: all 0.3s ease;
    min-height: 48px; /* 터치 친화적 크기 */
  }

  /* 링크 스타일 */
  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }

  /* 입력 필드 스타일 */
  input, select, textarea {
    font-family: inherit;
    font-size: 18px;
    padding: 12px;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    transition: border-color 0.3s ease;
    min-height: 48px;
  }

  input:focus, select:focus, textarea:focus {
    border-color: var(--primary-color);
    outline: none;
  }

  /* 스크롤바 스타일 */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark);
  }

  /* 반응형 디자인 */
  @media (max-width: 768px) {
    body {
      font-size: 16px;
    }
    
    button {
      font-size: 16px;
      padding: 10px 20px;
    }
    
    input, select, textarea {
      font-size: 16px;
      padding: 10px;
    }
  }

  /* 고령층을 위한 추가 접근성 개선 */
  .high-contrast {
    background-color: #000;
    color: #fff;
  }

  .large-text {
    font-size: 20px;
  }

  .extra-large-text {
    font-size: 24px;
  }
`; 