import Navbar from '@/src/component/Navbar';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/ShortCut.module.css';
import { shortcuts } from '@/public/shortcuts';
import useKeyInput from '@/src/hooks/useKeyInput';
import { useState } from 'react';

const PracShortCut = () => {
  const {
    currentShortcutIndex,
    keysPressed
  } = useKeyInput();
  const [pageNum, setPageNum] = useState(1);

	// 현재 카드에 해당하는 단축키를 가져옴
	const currentShortcut = shortcuts[currentShortcutIndex];
  const shortcutKeys = currentShortcut.shortcut.split(' + ');

  // 키 입력이 완료되었을 때
  const handleInputComplete = () => {
    console.log('Keys pressed:', keysPressed);
  };
	
  // 다음 카드로 넘어갈 때
  const handleNextCard = () => {
    setPageNum(pageNum - 1);
    setCurrentShortcutIndex(currentShortcutIndex + 1);
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Sidebar title="학습 종료" image="/images/leave.png" />
        <div className={styles.right_container}>
          <div className={styles.title_container}>
            <p className={styles.title}>Visual Studio Code 단축어 연습</p>
            <p className={styles.title}>단축어와 의미를 익히고 따라쳐보며 암기해보세요!</p>
          </div>
          <div className={styles.page_container}>
            <div className={styles.current_page}>{pageNum}</div>
            <div className={styles.line}> | </div>
            <div className={styles.all_page}>{shortcuts.length}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_title}>{currentShortcut.shortcut}</div>
            <div className={styles.card_content}>{currentShortcut.description}</div>
          </div>
          <div className={styles.input_container}>
						{shortcutKeys.map((key, index) => (
							<div className={styles.input} key={index}>{keysPressed[index]}</div>
						))}
          </div>
          <button className={styles.enter_btn} onClick={handleInputComplete}>
            입력 완료
          </button>
          <div className={styles.btn_container}>
            <button className={styles.retry_btn}>다시하기</button>
            <button className={styles.next_btn} onClick={handleNextCard}>
              넘어가기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracShortCut;
