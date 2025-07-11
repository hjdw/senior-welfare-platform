# GitHub Pages 배포 가이드

## 1. GitHub 저장소 생성
1. [GitHub](https://github.com)에 로그인
2. "New repository" 클릭
3. 저장소 이름: `senior-welfare-platform`
4. Public으로 설정
5. "Create repository" 클릭

## 2. 프로젝트를 GitHub에 업로드
```bash
# Git 초기화
git init

# 파일 추가
git add .

# 첫 번째 커밋
git commit -m "Initial commit: 고령층 복지시설 정보 플랫폼"

# GitHub 저장소 연결 (YOUR_USERNAME을 실제 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/senior-welfare-platform.git

# GitHub에 업로드
git push -u origin main
```

## 3. GitHub Pages 설정
1. GitHub 저장소 페이지에서 "Settings" 탭 클릭
2. 왼쪽 메뉴에서 "Pages" 클릭
3. Source를 "Deploy from a branch"로 설정
4. Branch를 "main"으로 설정
5. Folder를 "/ (root)"로 설정
6. "Save" 클릭

## 4. 배포 스크립트 실행
```bash
npm run deploy
```

## 5. 도메인 확인
- 배포 완료 후 `https://YOUR_USERNAME.github.io/senior-welfare-platform`에서 접속 가능
- 예: `https://john-doe.github.io/senior-welfare-platform`

## 6. 카카오 맵 API 도메인 등록
1. [Kakao Developers](https://developers.kakao.com)에서 애플리케이션 선택
2. "플랫폼 > Web 플랫폼"에서 도메인 추가:
   - `https://YOUR_USERNAME.github.io`
   - `https://YOUR_USERNAME.github.io/senior-welfare-platform` 