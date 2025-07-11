@echo off
echo 고령층 복지시설 정보 플랫폼 설치를 시작합니다...
echo.

echo 1. Node.js 버전 확인...
node --version
if %errorlevel% neq 0 (
    echo Node.js가 설치되어 있지 않습니다. https://nodejs.org 에서 다운로드하세요.
    pause
    exit /b 1
)

echo.
echo 2. npm 패키지 설치 중...
npm install
if %errorlevel% neq 0 (
    echo 패키지 설치에 실패했습니다.
    pause
    exit /b 1
)

echo.
echo 3. 환경 변수 파일 생성...
if not exist .env (
    copy env.example .env
    echo .env 파일이 생성되었습니다. Kakao Map API 키를 설정하세요.
) else (
    echo .env 파일이 이미 존재합니다.
)

echo.
echo 4. 설치 완료!
echo.
echo 다음 명령어로 개발 서버를 실행할 수 있습니다:
echo npm start
echo.
echo Kakao Map API 키를 .env 파일에 설정한 후 실행하세요.
pause 