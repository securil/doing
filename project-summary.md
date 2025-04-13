# Do-ing 프로젝트 개발 작업 요약

## 개요
Do-ing 프로젝트는 https://securil.github.io/doing/ 사이트를 Astro, GitHub, Firebase를 연동하여 모듈화하는 작업입니다. 기존 홈페이지의 디자인과 톤앤매너를 유지하면서 개발 환경에서 고도화하는 것이 목표였습니다.

## 주요 작업 내용

1. **개발 환경 구축**
   - Astro 프로젝트 생성
   - Tailwind CSS 설정
   - Firebase 연동 설정

2. **컴포넌트 모듈화**
   - Header 컴포넌트
   - Hero 섹션 (캐러셀 포함)
   - Services 섹션
   - About 섹션
   - Projects 섹션
   - Contact 섹션
   - Footer 컴포넌트

3. **페이지 구성**
   - 메인 페이지
   - 프로젝트 상세 페이지

4. **Firebase 연동**
   - 설정 파일 생성
   - 문의하기 기능 구현
   - 프로젝트 데이터 관리 서비스 구현

5. **GitHub 배포 설정**
   - GitHub Actions Workflow 설정
   - GitHub Pages 배포 준비

## 디렉토리 구조

```
F:\Project\doing-new\
├── .github\workflows\      # GitHub Actions 설정
├── src\
│   ├── components\         # UI 컴포넌트
│   ├── layouts\            # 페이지 레이아웃
│   ├── pages\              # 라우팅 페이지
│   │   └── projects\       # 프로젝트 상세 페이지
│   ├── firebase\           # Firebase 서비스
│   ├── utils\              # 유틸리티 함수
│   ├── styles\             # 스타일 파일
│       ├── global.css      # 전역 스타일
│       └── hero.css        # 히어로 섹션 스타일
├── public\                 # 정적 파일
│   └── images\             # 이미지 파일
├── astro.config.mjs        # Astro 설정
├── tailwind.config.cjs     # Tailwind 설정
├── postcss.config.js       # PostCSS 설정
└── package.json            # 프로젝트 설정
```

## 개발 서버 실행 방법

1. 프로젝트 디렉토리로 이동:
   ```
   cd F:\Project\doing-new
   ```

2. 개발 서버 실행:
   ```
   npm run dev
   ```

3. 웹 브라우저에서 접속:
   ```
   http://localhost:4321
   ```

## 최근 수정사항

1. **개발/배포 환경 분리 설정**
   - astro.config.mjs 파일에서 개발 환경과 배포 환경 구분 설정
   - 개발 환경: base 경로 없이 http://localhost:4321로 접속
   - 배포 환경: /doing/ base 경로 적용하여 GitHub Pages에 배포
   - package.json의 스크립트 명령어 수정 및 개선

2. **이미지 경로 관리 시스템 개선**
   - 환경에 따라 동적으로 이미지 경로를 처리하는 유틸리티 함수 추가
   - 개발 환경과 배포 환경에서 모두 일관되게 작동하도록 설정
   - src/utils/paths.js 파일에 getImagePath 함수 구현

3. **컴포넌트 이미지 경로 동적 처리**
   - Hero 컴포넌트의 슬라이드 배경 이미지를 인라인 스타일로 변경
   - About, Projects, Contact 등 모든 컴포넌트의 이미지 경로 처리 방식 통일
   - 하드코딩된 '/doing/images/' 경로 참조 제거

4. **Firebase 서비스 구현**
   - Firebase 설정 파일 및 서비스 구성
   - 문의하기 기능 구현을 위한 서비스 추가
   - 환경 변수를 통한 설정 관리로 보안 강화

5. **Tailwind CSS 설정 최적화**
   - 커스텀 색상 및 애니메이션 설정 추가
   - 프로젝트에 필요한 그라데이션 및 색상 유틸리티 추가
   - 전역 스타일과 컴포넌트 스타일 분리로 구조 개선

6. **CSS 애니메이션 및 효과 개선**
   - fadeInUp 애니메이션 및 커스텀 애니메이션 적용
   - 스크롤 이벤트에 연동된 요소 등장 효과 구현
   - 캐러셀 슬라이드 전환 효과 최적화

7. **프로젝트 구조 재조정**
   - 명확한 폴더 구조 정립
   - 컴포넌트 간 재사용 가능한 기능 분리
   - 코드 중복 제거 및 유지보수성 향상

## 배포 방법

1. GitHub 저장소에 연결:
   ```
   cd F:\Project\doing-new
   git init
   git remote add origin https://github.com/securil/doing.git
   ```

2. 코드 커밋 및 푸시:
   ```
   git add .
   git commit -m "개발/배포 환경 분리 및 이미지 경로 문제 해결"
   git branch -M main
   git push -f origin main
   ```

3. 배포 스크립트 실행:
   ```
   npm run build:deploy
   ```

4. GitHub 저장소 설정에서 GitHub Pages 활성화:
   - Settings > Pages에서 Source를 "Deploy from a branch"로 설정
   - Branch를 "gh-pages"로 선택
   - 배포된 사이트 URL: https://securil.github.io/doing/

## 개발/배포 환경 설정 상세

1. **astro.config.mjs**
   ```javascript
   import { defineConfig } from 'astro/config';
   import tailwind from '@astrojs/tailwind';

   const isDev = process.env.NODE_ENV !== 'production';

   export default defineConfig({
     base: isDev ? '/' : '/doing/',
     integrations: [tailwind()],
     server: {
       port: 4321,
     }
   });
   ```

2. **package.json 스크립트**
   ```json
   "scripts": {
     "dev": "cross-env NODE_ENV=development astro dev",
     "build": "cross-env NODE_ENV=production astro build",
     "preview": "astro preview",
     "deploy": "node -e \"require('fs').writeFileSync('dist/.nojekyll', '')\" && gh-pages -d dist --dotfiles",
     "build:deploy": "npm run build && npm run deploy"
   }
   ```

3. **이미지 경로 유틸리티**
   ```javascript
   export function getImagePath(path) {
     const imagePath = path.startsWith('/') ? path : `/images/${path}`;
     const basePath = import.meta.env.BASE_URL || '/';
     const cleanPath = imagePath.replace(/^\/doing/, '');
     return `${basePath.endsWith('/') ? basePath.slice(0, -1) : basePath}${cleanPath}`;
   }
   ```

## 추가 개선 사항

1. **이미지 최적화**
   - 이미지 크기 및 포맷 최적화로 로딩 속도 개선
   - WebP 또는 AVIF 포맷 활용으로 이미지 품질 유지하며 용량 감소

2. **캐시 전략 개선**
   - 정적 애셋에 캐시 헤더 적용
   - 이미지 및 스타일시트의 효율적인 캐싱 전략 구현

3. **성능 개선**
   - Lighthouse 테스트를 통한 성능 점수 확인 및 최적화
   - 코드 스플리팅 및 지연 로딩 적용

4. **접근성 향상**
   - 웹 접근성 표준 준수
   - 스크린 리더 호환성 확인 및 개선

## 참고
실제 사용을 위해서는 `src/firebase/config.js` 파일에 Firebase 프로젝트 정보를 업데이트해야 합니다. 현재 Firebase 설정은 클라이언트 측에서 작동하도록 수정되었으며, 보안이 필요한 서버 사이드 작업은 별도의 서버리스 함수나 백엔드 서비스를 통해 구현해야 합니다.

개발/배포 환경 설정에 문제가 있을 경우, astro.config.mjs 파일과 package.json의 스크립트를 확인하세요. 이미지 경로 문제는 src/utils/paths.js의 getImagePath 함수를 통해 해결할 수 있습니다.
