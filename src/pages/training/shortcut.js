import Navbar from '@/src/component/Navbar';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/Shortcut.module.css';
import { shortcuts } from '@/public/shortcuts';
import { useEffect, useState } from 'react';
import Modal from '@/src/component/Modal';

const TrainingShortcut = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentKeyIdx, setCurrentKeyIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(Array(shortcuts[currentIdx]?.combination.length).fill(''));
  const [backgroundColor, setBackgroundColor] = useState("#c9c9c9");

  useEffect(() => {
    const handler = (e) => {
      if (!visible && currentKeyIdx !== -1) {
        if (e.key === 'Alt' || e.key === 'Tab') {
          e.preventDefault();
        }
        setCurrentKeyIdx((idx) => {
          if (idx + 1 === shortcuts[currentIdx].combination.length) {
            e.preventDefault();
            return -1;
          } else {
            return idx + 1;
          }
        });
    
        setPressed((prevPressed) => {
          const newPressed = [...prevPressed];
          newPressed[currentKeyIdx] = e.key;
          return newPressed;
        });
      }
    };
    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [currentIdx, currentKeyIdx, visible]);

  const shortcut = shortcuts[currentIdx];
  const isCorrect = () => {
    let isAllCorrect = true;

    for (let i = 0; i < shortcut.combination.length; i++) {
      if (shortcut.combination[i] !== pressed[i]) {
        isAllCorrect = false;
        break;
      }
    }

    isAllCorrect ? setBackgroundColor("#C9EEDC") : setBackgroundColor("#FFDDDD");
  }

  return (
    <>
      {currentIdx === shortcuts.length-1 ? <Modal title="Visual Studio Code 단축키 실습"/> : ""}
      <div style={currentIdx === shortcuts.length-1 ? {width: "100%", height: "100%", backgroundColor: "#D9D9D9", opacity: "50%"} : null}>
        <Navbar/>
        <div className={styles.container}>
        <Sidebar isStudy={true} isSelected={true}/>
          <div className={styles.right_container}>
            <div className={styles.title_container}>
              <p className={styles.title}>Visual Studio Code 단축키 실습</p>
              <p className={styles.title}>제시된 의미에 맞는 단축키를 입력하세요!</p>
            </div>
            <div className={styles.page_container}>
              <div className={styles.current_page}>{currentIdx + 1}</div>
              <div className={styles.line}> | </div>
              <div className={styles.all_page}>{shortcuts.length}</div>
            </div>
            <div className={styles.card} style={{backgroundImage: "url('/images/training_card.png')"}}>
              <div className={styles.card_content}>{shortcut.description}</div>
            </div>
            <div className={styles.input_container}>
              {shortcut.combination.map((c, idx) => {
                if(currentKeyIdx > -1) {
                  console.log("idx: ", idx);
                  console.log("c: ", currentKeyIdx);
                  return (
                    <>
                      <span className={styles.input} style={c === 'Shift' ? { width: "64px" } : null}>{
                        (() => {
                          switch(pressed[idx]) {
                            case 'Control' : return 'Ctrl';
                            case 'ArrowUp' : return '↑';
                            case 'ArrowLeft' : return '←';
                            case 'Tab': return 'Tab';
                            case 'Alt': return 'Alt';
                            case 'Shift': return 'Shift';
                            default : return pressed[idx].toUpperCase();
                          }
                        })()}</span>
                      {idx === shortcut.combination.length - 1 ? null : <span className={styles.text}> + </span>}
                    </>
                  );
                } else {
                  return (
                    <>
                      <span className={styles.disa_input} style={{ backgroundColor, width: c === 'Shift' ? "64px" : null }}>{
                        (() => {
                          switch(pressed[idx]) {
                            case 'Control' : return 'Ctrl';
                            case 'ArrowUp' : return '↑';
                            case 'ArrowLeft' : return '←';
                            case 'Tab': return 'Tab';
                            case 'Alt': return 'Alt';
                            case 'Shift': return 'Shift';
                            default : return pressed[idx].toUpperCase();
                          }
                        })()}</span>
                      {idx === shortcut.combination.length - 1 ? null : <span className={styles.text}> + </span>}
                    </>
                  );
                }
              })}
            </div>
            {
              !visible ? 
              <button className={styles.enter_btn} onClick={() => {
                setVisible(true);
                isCorrect();
              }}>
                압력완료
              </button>
              :
							backgroundColor === "#C9EEDC"? 
							<button className={styles.next_btn}
								style={{marginTop: "40px"}}
								onClick={() => {
									setCurrentIdx(idx => idx + 1);
                  setCurrentKeyIdx(idx => 0);
                  setVisible(false);
                  setBackgroundColor("#c9c9c9");
                  setPressed(Array(shortcuts[currentIdx]?.combination.length).fill(''));
								}}>넘어가기</button>
							:
							<button className={styles.retry_btn}
								style={{marginTop: "40px"}}
								onClick={() => {
									setCurrentIdx(idx => idx + 1);
                  setCurrentKeyIdx(idx => 0);
                  setVisible(false);
                  setBackgroundColor("#c9c9c9");
                  setPressed(Array(shortcuts[currentIdx]?.combination.length).fill(''));
								}}>나중에 한 번 더</button>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainingShortcut;