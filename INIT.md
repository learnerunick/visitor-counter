# Node.js 프로젝트 초기화 (INIT)

요청하신 방식처럼 **신규 파일을 추가하지 않고, 기존 파일을 수정하는 기준**으로 구성했습니다.

## 수정한 기존 파일
- `package.json`: 실행/테스트 스크립트와 엔트리 설정 유지
- `server.js`: 포트 `3000` 기본값의 `Hello World` 웹서버 유지
- `INIT.md`: 실행 방법 문서만 업데이트

## 사용 방법
1. 의존성 설치
   ```bash
   npm install
   ```
2. 서버 실행 (기본 포트 3000)
   ```bash
   npm start
   ```
3. 포트 충돌 시 다른 포트로 실행
   ```bash
   PORT=3001 npm start
   ```
4. 브라우저 또는 curl로 확인
   ```bash
   curl http://localhost:3000
   ```
