import { useRef } from 'react';
// 클릭 시 특정 위치로 스크롤
function useMoveScroll() {
  const element = useRef(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { element, onMoveToElement};
}

export default useMoveScroll;