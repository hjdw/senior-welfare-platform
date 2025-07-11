# 고령층 복지시설 정보 플랫폼

## 프로젝트 개요
고령화가 급속히 진행 중인 한국 사회에서 60대 이상 고령층이 요양병원, 요양원, 실버타운 등 복지시설에 대한 정보를 손쉽게 탐색하고 비교하며 접근할 수 있도록 개발된 React 기반의 반응형 웹 플랫폼입니다.

## 주요 기능
- 📍 **위치 기반 검색**: Kakao Map API를 활용한 지도 기반 시설 검색
- 🔍 **다양한 검색 옵션**: 지역, 시설 유형, 서비스별 필터링
- ⭐ **즐겨찾기 기능**: LocalStorage를 활용한 개인화 서비스
- 📊 **시설 비교**: 선택한 시설들의 상세 정보 비교
- ♿ **웹 접근성**: WCAG 2.1 지침 준수로 고령층 친화적 인터페이스
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원

## 기술 스택
- **Frontend**: React 18, TypeScript
- **스타일링**: Styled Components
- **지도 API**: Kakao Map API
- **상태 관리**: React Query, LocalStorage
- **라우팅**: React Router DOM
- **폼 관리**: React Hook Form
- **애니메이션**: Framer Motion

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
`.env` 파일을 생성하고 Kakao Map API 키를 설정하세요:
```
REACT_APP_KAKAO_MAP_API_KEY=your_kakao_map_api_key_here
```

### 3. 개발 서버 실행
```bash
npm start
```

### 4. 빌드 및 배포
```bash
npm run build
npm run deploy
```

## 프로젝트 구조
```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── common/         # 공통 컴포넌트
│   ├── map/           # 지도 관련 컴포넌트
│   ├── search/        # 검색 관련 컴포넌트
│   └── facility/      # 시설 정보 컴포넌트
├── pages/             # 페이지 컴포넌트
├── hooks/             # 커스텀 훅
├── services/          # API 서비스
├── types/             # TypeScript 타입 정의
├── utils/             # 유틸리티 함수
├── styles/            # 글로벌 스타일
└── data/              # 정적 데이터

```

## 웹 접근성 고려사항
- 고대비 색상 조합 사용
- 큰 폰트 크기와 명확한 타이포그래피
- 키보드 네비게이션 지원
- 스크린 리더 호환성
- 터치 친화적 UI 요소

## 데이터 출처
- 통계청 고령자 통계 (2023)
- 보건복지부 노인복지시설 현황
- 한국정보화진흥원 디지털 정보격차 해소 연구
- 대한의료정보학회 노인 대상 웹사이트 사용성 평가 논문

## 라이선스
MIT License 