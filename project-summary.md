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
   - BuildLink 페이지 (건축자재 유통플랫폼)

4. **Firebase 연동**
   - 설정 파일 생성
   - 문의하기 기능 구현
   - 프로젝트 데이터 관리 서비스 구현

5. **GitHub 배포 설정**
   - GitHub Actions Workflow 설정
   - GitHub Pages 배포 준비

6. **애니메이션 및 효과 개선**
   - 애니메이션 CSS 추가 (animations.css)
   - 스크롤 기반 애니메이션 유틸리티 구현
   - 마우스 오버 효과 컴포넌트 개발
   - 성능 최적화를 위한 애니메이션 조정

## 디렉토리 구조

```
F:\Project\doing-new\
├── .github\workflows\      # GitHub Actions 설정
├── src\
│   ├── components\         # UI 컴포넌트
│   │   ├── Header.astro    # 헤더 컴포넌트
│   │   └── Footer.astro    # 푸터 컴포넌트
│   ├── layouts\            # 페이지 레이아웃
│   ├── pages\              # 라우팅 페이지
│   │   ├── projects\       # 프로젝트 상세 페이지
│   │   └── buildlink.astro # 건축자재 유통플랫폼 페이지
│   ├── firebase\           # Firebase 서비스
│   ├── scripts\            # 스크립트 파일
│   │   └── animations.js   # 애니메이션 유틸리티
│   ├── utils\              # 유틸리티 함수
│   │   └── paths.js        # 경로 유틸리티
│   ├── styles\             # 스타일 파일
│       ├── global.css      # 전역 스타일
│       └── animations.css  # 애니메이션 스타일
├── public\                 # 정적 파일
│   └── images\             # 이미지 파일
│       ├── projects\       # 프로젝트 이미지
│       ├── pattern-bg.svg  # 패턴 배경 이미지
│       ├── materials\      # 자재 이미지
│       └── buildlink\      # BuildLink 서비스 이미지
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

1. **불필요한 파일 및 컴포넌트 정리**
   - 중복되는 컴포넌트 제거
   - 미사용 CSS 파일 제거
   - 애니메이션과 스타일 코드 통합

2. **BuildLink 페이지 개선**
   - 계약서 자동화 서비스에서 건축자재 유통플랫폼으로 컨셉 변경
   - 사용자 중심의 UI/UX 설계
   - 서비스 프로세스, 포인트 결제 시스템, 자재 갤러리 섹션 추가
   - 사용자 중심의 FAQ 콘텐츠 업데이트

3. **애니메이션 및 효과 시스템 최적화**
   - 스크립트 중복 실행 방지 로직 추가
   - 모바일 기기 감지 및 최적화
   - 접근성 향상을 위한 prefers-reduced-motion 지원
   - 애니메이션 초기화 로직 개선

4. **네비게이션바 기능 개선**
   - 다른 페이지에서도 메인 페이지의 섹션으로 이동 가능하도록 수정
   - 현재 페이지 감지 로직 추가 및 경로 조건부 처리
   - 모든 환경에서 일관된 링크 동작 구현
   - 절대 경로와 해시 태그 경로 적절히 처리

5. **이미지 경로 관리 시스템 개선**
   - 환경에 따라 동적으로 이미지 경로를 처리하는 유틸리티 함수 구현
   - 개발 환경과 배포 환경에서 모두 일관되게 작동하도록 설정
   - 모든 컴포넌트에서 일관된 이미지 경로 사용

## BuildLink 페이지 구성 상세

1. **히어로 섹션**
   - 건축자재 유통의 새로운 기준 소개
   - 자재 납품, 계약, 인력 매칭을 한번에 해결하는 플랫폼 강조
   - "지금 시작하기" 및 "서비스 살펴보기" CTA 버튼

2. **플랫폼 소개 섹션**
   - 계약서 자동화, 자재 유통 중계, 인력 매칭 세 가지 핵심 기능 소개
   - 각 기능별 아이콘과 설명으로 직관적인 이해 도모

3. **서비스 프로세스 섹션**
   - 5단계 자재 거래 프로세스 시각화
   - 회원가입 → 자재 검색 → 견적 요청 → 자동 계약서 → 거래 완료
   - 단계별 아이콘 및 설명으로 사용자 경험 향상

4. **포인트 결제 시스템**
   - 포인트 기반 서비스 이용 구조 설명
   - 서비스별 포인트 사용량 명시
   - "포인트 충전하기" CTA 버튼

5. **템플릿 갤러리**
   - 다양한 계약서 템플릿 미리보기 제공
   - 건축공사, 인테리어, 자재 납품, 위수탁 계약서 등
   - SVG로 제작된 템플릿 이미지로 고해상도 지원

6. **FAQ 섹션**
   - 자주 묻는 질문과 답변
   - 서비스 이용 비용, 전자계약 법적 효력, 자재 공급업체 등록, 계약서 저장 방법
   - 사용자 불안 해소를 위한 정보 제공

7. **인기 자재 섹션**
   - 건설 및 인테리어 현장에서 가장 많이 찾는 자재 소개
   - 각 자재별 이미지, 가격, 위치 정보 제공
   - 인기/베스트/할인/신상품 등의 태그로 사용자 관심 유도

8. **시작하기 섹션**
   - 회원가입 및 무료 체험하기 CTA 버튼
   - 문의 연락처 정보 (이메일, 전화번호)
   - 그라데이션 배경으로 시각적 강조

## 애니메이션 및 효과 시스템 상세

1. **애니메이션 클래스**
   - `fade-in`: 요소가 서서히 나타나는 효과
   - `slide-in-left/right`: 요소가 좌/우에서 미끄러져 들어오는 효과
   - `scale-in`: 요소가 확대되며 나타나는 효과
   - `bounce-in`: 요소가 튀면서 나타나는 효과
   - `rotate-in`: 요소가 회전하며 나타나는 효과
   - 지연 클래스: `delay-100` ~ `delay-1000` (100ms 단위)

2. **호버 효과 클래스**
   - `hover-lift`: 마우스 오버 시 요소가 위로 살짝 뜨는 효과
   - `hover-scale`: 마우스 오버 시 요소가 확대되는 효과
   - `hover-bright`: 마우스 오버 시 요소가 밝아지는 효과
   - `hover-border`: 마우스 오버 시 밑줄이 서서히 나타나는 효과
   - `hover-shadow`: 마우스 오버 시 그림자가 강화되는 효과
   - `hover-rotate`: 마우스 오버 시 요소가 약간 회전하는 효과

3. **스크롤 애니메이션 최적화**
   - 중복 초기화 방지 로직
   ```javascript
   // 이미 초기화되었는지 확인
   if (window._animationsInitialized) return;
   // 초기화 완료 표시
   window._animationsInitialized = true;
   ```
   
   - 모바일 기기 최적화
   ```javascript
   // 모바일에서는 간소화된 애니메이션 적용
   if (isMobile) {
     element.style.opacity = "1";
     element.style.transform = "none";
   }
   ```
   
   - 접근성 개선
   ```javascript
   // prefers-reduced-motion 확인
   const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

   if (prefersReducedMotion) {
     // 접근성을 위해 모든 애니메이션 비활성화
     document.documentElement.classList.add('reduced-motion');
   }
   ```

## 네비게이션 기능 개선 상세

1. **페이지 감지 로직**
   ```javascript
   // 현재 페이지 확인
   const currentPath = Astro.url.pathname;
   const isHomePage = currentPath === '/' || currentPath === homeUrl || 
                     currentPath.endsWith('/index.html');
   ```

2. **조건부 링크 경로**
   ```javascript
   // 메인 페이지에서는 해시 태그, 다른 페이지에서는 전체 경로
   <a href={isHomePage ? "#services" : `${homeUrl}#services`}>Services</a>
   ```

3. **경로 생성 유틸리티**
   ```javascript
   // base 경로를 고려한 URL 생성 함수
   function getPageUrl(path) {
     const basePath = import.meta.env.BASE_URL || '/';
     const cleanPath = path.startsWith('/') ? path : `/${path}`;
     return `${basePath.endsWith('/') ? basePath.slice(0, -1) : basePath}${cleanPath}`;
   }
   ```

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
   git commit -m "BuildLink 페이지 개선 및 최적화"
   git branch -M main
   git push -f origin main
   ```

3. 배포 스크립트 실행:
   ```
   npm run build:deploy
   ```
   - 이 명령어는 프로젝트를 빌드하고 결과물을 gh-pages 브랜치에 자동으로 배포합니다.
   - GitHub 저장소에서 "gh-pages had recent pushes" 메시지가 표시되면 배포가 성공한 것입니다.

4. GitHub 저장소 설정에서 GitHub Pages 활성화:
   - Settings > Pages에서 Source를 "Deploy from a branch"로 설정
   - Branch를 "gh-pages"로 선택
   - 배포된 사이트 URL: https://securil.github.io/doing/

## 추가 개선 사항

1. **이미지 최적화**
   - 이미지 크기 및 포맷 최적화로 로딩 속도 개선
   - SVG 이미지 활용으로 해상도 독립적인 그래픽 제공
   - WebP 또는 AVIF 포맷 활용으로 이미지 품질 유지하며 용량 감소

2. **성능 개선**
   - Lighthouse 테스트를 통한 성능 점수 확인 및 최적화
   - 코드 스플리팅 및 지연 로딩 적용
   - 이미지 최적화 및 캐싱 전략 구현

3. **접근성 향상**
   - 웹 접근성 표준 준수
   - 스크린 리더 호환성 확인 및 개선
   - 키보드 탐색 가능성 개선

4. **반응형 디자인 테스트**
   - 다양한 모바일 기기에서 반응형 디자인 테스트
   - 태블릿 및 중간 크기 화면에서의 레이아웃 최적화
   - 넓은 화면에서의 컨텐츠 배치 개선

5. **실제 기능 구현**
   - Firebase를 활용한 사용자 인증 및 포인트 시스템 구현
   - 실제 자재 데이터베이스 연동
   - 견적 요청 및 계약서 생성 기능 구현

## 참고

이 프로젝트는 Astro와 Tailwind CSS를 활용한 모던 웹 개발 방식으로 구현되었습니다. 애니메이션 효과는 `animations.css` 파일과 `animations.js` 스크립트에 정의되어 있으며, Layout 컴포넌트를 통해 전역적으로 적용됩니다.

BuildLink 페이지는 현재 목업(mockup) 디자인으로 구현되었으며, 사용자 경험(UX)을 보여주기 위한 목적입니다. 실제 서비스로 발전시키기 위해서는 Firebase 연동, 데이터베이스 구축, 백엔드 API 개발이 필요합니다.

이미지 경로와 관련된 문제가 발생할 경우 `src/utils/paths.js`의 `getImagePath` 함수를 확인하세요. 개발 환경과 배포 환경에서 일관된 경로를 제공합니다.