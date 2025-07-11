# Vercel 배포 가이드

## 1. Vercel 계정 생성
1. [Vercel](https://vercel.com)에 접속
2. GitHub 계정으로 로그인

## 2. 프로젝트 배포
1. "New Project" 클릭
2. GitHub 저장소 선택 (senior-welfare-platform)
3. "Import" 클릭
4. 프로젝트 설정:
   - Framework Preset: Create React App
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: build
5. "Deploy" 클릭

## 3. 환경 변수 설정
1. 프로젝트 대시보드에서 "Settings" 클릭
2. "Environment Variables" 탭 클릭
3. 다음 변수 추가:
   - Name: `REACT_APP_KAKAO_MAP_API_KEY`
   - Value: `2d0cd4c789dfef915cf0afa5275f5798`
   - Environment: Production, Preview, Development
4. "Save" 클릭

## 4. 도메인 확인
- 배포 완료 후 `https://senior-welfare-platform-xxxxx.vercel.app`에서 접속 가능
- 커스텀 도메인도 설정 가능

## 5. 카카오 맵 API 도메인 등록
1. [Kakao Developers](https://developers.kakao.com)에서 애플리케이션 선택
2. "플랫폼 > Web 플랫폼"에서 도메인 추가:
   - `https://senior-welfare-platform-xxxxx.vercel.app`
   - 커스텀 도메인이 있다면 그것도 추가

## 6. 자동 배포
- GitHub에 코드를 푸시하면 자동으로 배포됨
- Pull Request마다 미리보기 URL 생성 