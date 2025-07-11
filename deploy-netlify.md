# Netlify 배포 가이드

## 1. Netlify 계정 생성
1. [Netlify](https://netlify.com)에 접속
2. GitHub 계정으로 로그인

## 2. 프로젝트 배포
1. "New site from Git" 클릭
2. GitHub 선택
3. 저장소 선택 (senior-welfare-platform)
4. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `build`
5. "Deploy site" 클릭

## 3. 환경 변수 설정
1. 사이트 대시보드에서 "Site settings" 클릭
2. "Environment variables" 클릭
3. "Add variable" 클릭:
   - Key: `REACT_APP_KAKAO_MAP_API_KEY`
   - Value: `2d0cd4c789dfef915cf0afa5275f5798`
4. "Save" 클릭

## 4. 도메인 확인
- 배포 완료 후 `https://senior-welfare-platform-xxxxx.netlify.app`에서 접속 가능
- 커스텀 도메인 설정 가능

## 5. 카카오 맵 API 도메인 등록
1. [Kakao Developers](https://developers.kakao.com)에서 애플리케이션 선택
2. "플랫폼 > Web 플랫폼"에서 도메인 추가:
   - `https://senior-welfare-platform-xxxxx.netlify.app`
   - 커스텀 도메인이 있다면 그것도 추가 