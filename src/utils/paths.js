/**
 * 환경에 따라 적절한 이미지 경로를 생성하는 함수
 * @param {string} path - 이미지 경로 (예: 'image.jpg' 또는 '/images/image.jpg')
 * @returns {string} - 완전한 이미지 경로
 */
export function getImagePath(path) {
  // 이미 절대 경로면 처리
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // 이미지 경로가 /으로 시작하지 않으면 /images/ 접두사 추가
  const imagePath = path.startsWith('/') ? path : `/images/${path}`;
  
  // 개발 환경과 배포 환경 구분 - import.meta.env.BASE_URL을 사용
  const basePath = import.meta.env.BASE_URL || '/';
  
  // /doing/images/... 형식에서 /doing 부분 제거하고 적절한 base 적용
  const cleanPath = imagePath.replace(/^\/doing/, '');
  
  // 경로가 이중 슬래시로 시작하지 않도록 처리
  return `${basePath.endsWith('/') ? basePath.slice(0, -1) : basePath}${cleanPath}`;
}
