/**
 * 페이지 스크롤 시 요소에 애니메이션을 적용하는 유틸리티
 */
export function initScrollAnimations() {
  // 이미 초기화되었는지 확인
  if (window._animationsInitialized) return;
  
  // 애니메이션 클래스 목록
  const animationClasses = [
    'fade-in', 'fade-up', 'fade-down',
    'slide-in-left', 'slide-in-right',
    'scale-in', 'bounce-in', 'rotate-in'
  ];
  
  // 모든 애니메이션 요소 선택
  const animElements = document.querySelectorAll(
    `.${animationClasses.join(', .')}`
  );
  
  // 모바일 기기 감지
  const isMobile = window.innerWidth < 768;
  
  // 각 요소에 원본 클래스를 저장하고 애니메이션 클래스 제거
  animElements.forEach(el => {
    // 이미 처리된 요소는 건너뛰기
    if (el.dataset.animInit) return;
    
    // 적용된 애니메이션 클래스 찾기
    const appliedClasses = animationClasses.filter(className => 
      el.classList.contains(className)
    );
    
    // 원본 클래스 저장
    appliedClasses.forEach(className => {
      el.classList.add(`${className}-orig`);
      el.classList.remove(className);
    });
    
    // 초기 상태 설정 - 투명하게 (모바일에서는 최적화)
    if (!isMobile) {
      el.style.opacity = "0";
    }
    
    // 처리 표시
    el.dataset.animInit = "true";
  });
  
  // Intersection Observer 설정
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // 모바일에서는 간소화된 애니메이션 적용
        if (isMobile) {
          element.style.opacity = "1";
          element.style.transform = "none";
        } else {
          // 원래 애니메이션 클래스 복원
          animationClasses.forEach(className => {
            if (element.classList.contains(`${className}-orig`)) {
              element.classList.add(className);
              element.classList.remove(`${className}-orig`);
            }
          });
        }
        
        // 관찰 중단
        observer.unobserve(element);
      }
    });
  }, {
    threshold: 0.1, // 10% 이상 보이면 실행
    rootMargin: '0px 0px -50px 0px' // 약간의 여유 공간
  });
  
  // 모든 애니메이션 요소 관찰 시작
  animElements.forEach(el => {
    observer.observe(el);
  });
  
  // 초기화 완료 표시
  window._animationsInitialized = true;
}

/**
 * 호버 효과 초기화
 */
export function initHoverEffects() {
  console.log("호버 효과 초기화 시작");
  
  // 이미 초기화되었는지 확인
  if (window._hoverEffectsInitialized) {
    console.log("이미 호버 효과가 초기화되어 있음");
    return;
  }
  
  // 호버 효과가 있는 요소들의 클래스 목록
  const hoverClasses = [
    'hover-lift', 'hover-scale', 'hover-bright', 
    'hover-rotate', 'hover-border', 'hover-bg',
    'hover-shadow', 'hover-btn'
  ];
  
  // CSS로 호버 효과 적용 (자바스크립트 이벤트 없이도 작동하도록)
  const styleElement = document.createElement('style');
  
  // 모든 호버 효과에 대한 CSS 직접 적용
  let cssRules = `
    .hover-lift:hover {
      transform: translateY(-5px) !important;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
    }
    
    .hover-scale:hover {
      transform: scale(1.05) !important;
    }
    
    .hover-bright:hover {
      filter: brightness(1.1) !important;
      transform: scale(1.02) !important;
    }
    
    .hover-rotate:hover {
      transform: rotate(2deg) !important;
    }
    
    .hover-border::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: currentColor;
      transition: width 0.3s ease;
    }
    
    .hover-border:hover::after {
      width: 100% !important;
    }
    
    .hover-bg:hover {
      background-color: rgba(59, 130, 246, 0.1) !important;
    }
    
    .hover-shadow:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
    }
    
    .hover-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
      z-index: -1;
    }
    
    .hover-btn:hover {
      transform: translateY(-2px) !important;
    }
    
    .hover-btn:hover::before {
      left: 0 !important;
    }
  `;
  
  // 스타일 요소에 CSS 추가 및 문서에 삽입
  styleElement.textContent = cssRules;
  document.head.appendChild(styleElement);
  
  console.log("직접 CSS 호버 효과 추가됨");
  
  // 모든 호버 효과 요소에 대해 기본 트랜지션 속성 추가
  hoverClasses.forEach(className => {
    const elements = document.querySelectorAll(`.${className}`);
    console.log(`${className} 요소 수:`, elements.length);
    
    elements.forEach(el => {
      // 이미 처리된 요소는 건너뛰기
      if (el.dataset.hoverInit) return;
      
      // 모든 요소에 기본 트랜지션 추가
      el.style.transition = 'all 0.3s ease';
      
      if (className === 'hover-border') {
        el.style.position = 'relative';
      }
      
      if (className === 'hover-btn') {
        el.style.position = 'relative';
        el.style.overflow = 'hidden';
        el.style.zIndex = '1';
      }
      
      // 처리 표시
      el.dataset.hoverInit = "true";
    });
  });
  
  // 초기화 완료 표시
  window._hoverEffectsInitialized = true;
  console.log("호버 효과 초기화 완료");
}

/**
 * 모든 애니메이션 효과 초기화
 */
export function initAllAnimations() {
  console.log("모든 애니메이션 효과 초기화 시작");
  
  // DOMContentLoaded 이벤트가 이미 발생했는지 확인
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      console.log("DOMContentLoaded에서 애니메이션 초기화");
      initScrollAnimations();
      initHoverEffects();
    });
  } else {
    // 이미 DOM이 로드되었다면 바로 실행
    console.log("DOM이 이미 로드됨 - 즉시 애니메이션 초기화");
    initScrollAnimations();
    initHoverEffects();
  }
  
  // 추가 안전장치: 페이지가 완전히 로드된 후에도 한 번 더 실행
  window.addEventListener('load', () => {
    console.log("Window load에서 애니메이션 재초기화");
    initScrollAnimations();
    initHoverEffects();
    
    // 0.5초 후 한 번 더 실행 (동적 콘텐츠를 위한 안전장치)
    setTimeout(() => {
      console.log("지연 실행: 마지막 애니메이션 초기화");
      initScrollAnimations();
      initHoverEffects();
    }, 500);
  });
}

// prefers-reduced-motion 확인
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // 접근성을 위해 모든 애니메이션 비활성화
  document.documentElement.classList.add('reduced-motion');
} else {
  // 애니메이션 즉시 초기화
  initAllAnimations();
}