import { shortcuts } from '@/public/shortcuts';
import { useState, useEffect } from 'react';

const useKeyInput = () => {
  const [currentInputIndex, setCurrentInputIndex] = useState(0); // 현재 입력 중인 인덱스
  const [currentShortcutIndex, setCurrentShortcutIndex] = useState(0); // 현재 카드 인덱스
  const [keysPressed, setKeysPressed] = useState(['', '']); // 입력한 키를 상태로 관리
  const [pageNum, setPageNum] = useState(1);

  
  useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Process' || event.key === 'Meta' || event.key === 'Backspace') {
				event.preventDefault();
        event.stopPropagation();
      } else if (event.key === 'Control' || event.key === 'HanjaMode') {
				event.preventDefault();
        event.stopPropagation();
        setKeysPressed((prevKeys) => {
					const newKeys = [...prevKeys];
          newKeys[currentInputIndex] = 'Ctrl';
          return newKeys;
        });
        setCurrentInputIndex((prevIndex) => (prevIndex + 1) % 3); // 다음 입력 인덱스로 이동
      } else if (event.key === 'Alt' || event.key === 'HangulMode') {
				event.preventDefault();
        event.stopPropagation();
        setKeysPressed((prevKeys) => {
					const newKeys = [...prevKeys];
          newKeys[currentInputIndex] = 'Alt';
          return newKeys;
        });
        setCurrentInputIndex((prevIndex) => (prevIndex + 1) % 3); // 다음 입력 인덱스로 이동
      } else if (event.key === 'F2') {
				event.preventDefault();
        event.stopPropagation();
        setKeysPressed((prevKeys) => {
					const newKeys = [...prevKeys];
          newKeys[currentInputIndex] = 'F2';
          return newKeys;
        });
        setCurrentInputIndex((prevIndex) => (prevIndex + 1) % 3); // 다음 입력 인덱스로 이동
      } else if (
				event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight'
				) {
					event.preventDefault();
					event.stopPropagation();
					let direction = '';
					if (event.key === 'ArrowUp') direction = '↑';
					else if (event.key === 'ArrowDown') direction = '↓';
					else if (event.key === 'ArrowLeft') direction = '←';
					else if (event.key === 'ArrowRight') direction = '→';
					setKeysPressed((prevKeys) => {
						const newKeys = [...prevKeys];
						newKeys[currentInputIndex] = direction;
						return newKeys;
					});
        setCurrentInputIndex((prevIndex) => (prevIndex + 1) % 3); // 다음 입력 인덱스로 이동
      } else if (event.key === 'Enter' && event.target.tagName !== 'INPUT') {
				event.preventDefault();
        event.stopPropagation();
        setCurrentShortcutIndex((prevIndex) => (prevIndex + 1) % shortcuts.length);
        setKeysPressed((prevKeys) => prevKeys.map(() => ''));
      } else {
				const key = event.key;
				setKeysPressed((prevKeys) => {
					const newKeys = [...prevKeys];
					newKeys[currentInputIndex] = key;
					return newKeys;
				});
				setCurrentInputIndex((prevIndex) => (prevIndex + 1) % shortcuts.length); // 다음 입력 인덱스로 이동
			}
    };
		
    window.addEventListener('keydown', handleKeyDown);
		
    return () => {
			window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentInputIndex]);
	
  // 키 입력이 완료되었을 때
  const handleInputComplete = () => {
    console.log('Keys pressed:', keysPressed);
  };
	
  // 다음 카드로 넘어갈 때
  const handleNextCard = () => {
    setCurrentShortcutIndex((prevIndex) => (prevIndex + 1) % shortcuts.length);
    setPageNum(pageNum + 1);
  }

  return {
    currentInputIndex,
    currentShortcutIndex,
    keysPressed,
    pageNum,
    setCurrentInputIndex,
    setCurrentShortcutIndex,
    setKeysPressed,
    setPageNum,
    handleInputComplete,
    handleNextCard,
  };
};

export default useKeyInput;