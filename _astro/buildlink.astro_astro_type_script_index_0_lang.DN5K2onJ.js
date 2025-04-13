function l(){if(window._animationsInitialized)return;const r=["fade-in","fade-up","fade-down","slide-in-left","slide-in-right","scale-in","bounce-in","rotate-in"],i=document.querySelectorAll(`.${r.join(", .")}`),s=window.innerWidth<768;i.forEach(o=>{if(o.dataset.animInit)return;r.filter(n=>o.classList.contains(n)).forEach(n=>{o.classList.add(`${n}-orig`),o.classList.remove(n)}),s||(o.style.opacity="0"),o.dataset.animInit="true"});const e=new IntersectionObserver(o=>{o.forEach(t=>{if(t.isIntersecting){const n=t.target;s?(n.style.opacity="1",n.style.transform="none"):r.forEach(d=>{n.classList.contains(`${d}-orig`)&&(n.classList.add(d),n.classList.remove(`${d}-orig`))}),e.unobserve(n)}})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});i.forEach(o=>{e.observe(o)}),window._animationsInitialized=!0}function a(){if(console.log("호버 효과 초기화 시작"),window._hoverEffectsInitialized){console.log("이미 호버 효과가 초기화되어 있음");return}const r=["hover-lift","hover-scale","hover-bright","hover-rotate","hover-border","hover-bg","hover-shadow","hover-btn"],i=document.createElement("style");let s=`
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
  `;i.textContent=s,document.head.appendChild(i),console.log("직접 CSS 호버 효과 추가됨"),r.forEach(e=>{const o=document.querySelectorAll(`.${e}`);console.log(`${e} 요소 수:`,o.length),o.forEach(t=>{t.dataset.hoverInit||(t.style.transition="all 0.3s ease",e==="hover-border"&&(t.style.position="relative"),e==="hover-btn"&&(t.style.position="relative",t.style.overflow="hidden",t.style.zIndex="1"),t.dataset.hoverInit="true")})}),window._hoverEffectsInitialized=!0,console.log("호버 효과 초기화 완료")}function c(){console.log("모든 애니메이션 효과 초기화 시작"),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{console.log("DOMContentLoaded에서 애니메이션 초기화"),l(),a()}):(console.log("DOM이 이미 로드됨 - 즉시 애니메이션 초기화"),l(),a()),window.addEventListener("load",()=>{console.log("Window load에서 애니메이션 재초기화"),l(),a(),setTimeout(()=>{console.log("지연 실행: 마지막 애니메이션 초기화"),l(),a()},500)})}const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches;h?document.documentElement.classList.add("reduced-motion"):c();document.addEventListener("DOMContentLoaded",()=>{console.log("BuildLink 페이지 애니메이션 초기화"),c();const r=()=>{console.log("BuildLink 페이지 호버 스타일 직접 적용"),document.querySelectorAll(".bg-white.rounded-xl").forEach(e=>{e.style.transition="all 0.3s ease",e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-10px)",e.style.boxShadow="0 15px 30px rgba(0, 0, 0, 0.1)"}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.boxShadow=""})}),document.querySelectorAll(".text-accent.border-2").forEach(e=>{e.style.transition="all 0.3s ease",e.addEventListener("mouseenter",()=>{e.style.backgroundColor="#4ca5d0",e.style.color="white"}),e.addEventListener("mouseleave",()=>{e.style.backgroundColor="",e.style.color=""})})};r(),setTimeout(r,500)});window.addEventListener("load",()=>{console.log("BuildLink 페이지 완전 로드 후 애니메이션 재초기화"),c(),a()});
