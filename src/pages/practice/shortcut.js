import Navbar from '@/src/component/Navbar';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/Shortcut.module.css';
import { shortcuts } from '@/public/shortcuts';
import { useEffect, useState } from 'react';
import Modal from '@/src/component/Modal';
import JSConfetti from 'js-confetti';

const PracticeShortcut = () => {
  const [currentIdx, setCurrentIdx] = useState(0); //데이터베이스에 보낼 %값    n/19
  const [currentKeyIdx, setCurrentKeyIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [complete, setComplete] = useState(false);

  const [jsConfetti, setJsConfetti] = useState(null);
  useEffect(() => {
      setJsConfetti(new JSConfetti());
  }, []);

  const handler = () => {
    console.log("dd")
      jsConfetti.addConfetti({
      confettiColors: [
          "#CAB0FF"
      ],
      confettiNumber: 500,
      });
  }


  useEffect(() => {
    const handler = (e) => {
      if(!visible) {
        if(e.key === shortcuts[currentIdx].combination[currentKeyIdx]) {
          if(e.key === 'Alt' || e.key === 'Tab') {
            e.preventDefault();
          }
          if(e.key === shortcuts[currentIdx].combination[shortcuts[currentIdx].combination.length-1]) {
            setVisible(!visible);
          }
          setCurrentKeyIdx(idx => {
            if(idx === -1) {
              setComplete(true);
              return 0;
            } else if(idx + 1 === shortcuts[currentIdx].combination.length) {
              e.preventDefault();
              setComplete(true);
              return -1;
            } else {
              return idx + 1;
            } 
          })
        }
      }
    }
    window.addEventListener("keydown", handler);
    
    return () => {
      window.removeEventListener("keydown", handler);
    } 
  }, [currentIdx, currentKeyIdx]);
  
  const shortcut = shortcuts[currentIdx];

  return (
    <>
      {currentIdx === shortcuts.length-1 ? <Modal title="Visual Studio Code 단축키 연습"/> : ""}
      <div style={currentIdx === shortcuts.length-1 ? {width: "100%", height: "100%", backgroundColor: "#D9D9D9", opacity: "50%"} : null}>
        <Navbar/>
        <div className={styles.container}>
        <Sidebar isStudy={true} isSelected={true}/>
          <div className={styles.right_container}>
            <div className={styles.title_container}>
              <p className={styles.title}>Visual Studio Code 단축어 연습</p>
              <p className={styles.title}>단축어와 의미를 익히고 따라쳐보며 암기해보세요!</p>
            </div>
            <div className={styles.page_container}>
              <div className={styles.current_page}>{currentIdx + 1}</div>
              <div className={styles.line}> | </div>
              <div className={styles.all_page}>{shortcuts.length}</div>
            </div>
            <div className={styles.card} style={{backgroundImage: "url('/images/practice_card.png')"}}>
              <div className={styles.card_title}>
                {shortcut.combination.map((c, idx) => {
                  if(idx === currentKeyIdx) {
                    return <>
                      <span className={styles.bold}>{
                        (() => {
                          switch(c) {
                            case 'Control' : return 'Ctrl';
                            case 'ArrowUp' : return '↑';
                            case 'ArrowLeft' : return '←';
                            case 'Tab': return 'Tab';
                            case 'Alt': return 'Alt';
                            case 'Shift': return 'Shift';
                            default : return c.toUpperCase();
                          }
                        })()}</span>
                      {idx === shortcut.combination.length - 1 ? null : <span className={styles.text}> + </span>}
                    </>
                  } else {
                    return <>
                      <span className={styles.text}>{
                        (() => {
                          switch(c) {
                            case 'Control' : return 'Ctrl';
                            case 'ArrowUp' : return '↑';
                            case 'ArrowLeft' : return '←';
                            case 'Tab': return 'Tab';
                            case 'Alt': return 'Alt';
                            case 'Shift': return 'Shift';
                            default : return c.toUpperCase();
                          }
                        })()}</span>
                      {idx === shortcut.combination.length - 1 ? null : <span className={styles.text}> + </span>}
                    </>
                  }
                })}
              </div>
              <div className={styles.card_content}>{shortcut.description}</div>
            </div>
            <div className={styles.input_container}>
              {shortcut.combination.map((c, idx) => {
                if (currentKeyIdx === 2 && idx === 0) {
                  return <>
                    <span className={styles.disa_input} style={c === 'Shift' ? { width: "64px" } : null}>{
                      (() => {
                        switch(c) {
                          case 'Control' : return 'Ctrl';
                          case 'ArrowUp' : return '↑';
                          case 'ArrowLeft' : return '←';
                          case 'Tab': return 'Tab';
                          case 'Alt': return 'Alt';
                          case 'Shift': return 'Shift';
                          default : return c.toUpperCase();
                        }
                      })()}</span>
                    {idx === shortcut.combination.length - 1 ? null : <span className={styles.text}> + </span>}
                  </>
                }
                else if (complete) {
                  return <>
                    <span className={styles.disa_input} style={c === 'Shift' ? { width: "64px" } : null}>{
                      (() => {
                        switch(c) {
                          case 'Control' : return 'Ctrl';
                          case 'ArrowUp' : return '↑';
                          case 'ArrowLeft' : return '←';
                          case 'Tab': return 'Tab';
                          case 'Alt': return 'Alt';
                          case 'Shift': return 'Shift';
                          default : return c.toUpperCase();
                        }
                      })()}</span>
                    {idx === shortcut.combination.length - 1 ? null : <span className={styles.text}> + </span>}
                  </>
                } else if(idx === currentKeyIdx) {
                  return <>
                    <span className={styles.input} style={c === 'Shift' ? { width: "64px" } : null}>{
                      (() => {
                        switch(c) {
                          case 'Control' : return 'Ctrl';
                          case 'ArrowUp' : return '↑';
                          case 'ArrowLeft' : return '←';
                          case 'Tab': return 'Tab';
                          case 'Alt': return 'Alt';
                          case 'Shift': return 'Shift';
                          default : return c.toUpperCase();
                        }
                      })()}</span>
                    {idx === shortcut.combination.length - 1 ? null : <span className={styles.text}> + </span>}
                  </>
                } else if(c === shortcut.combination[currentKeyIdx-1]) {
                  return <>
                    <span className={styles.disa_input} style={c === 'Shift' ? { width: "64px" } : null}>{
                      (() => {
                        switch(c) {
                          case 'Control' : return 'Ctrl';
                          case 'ArrowUp' : return '↑';
                          case 'ArrowLeft' : return '←';
                          case 'Tab': return 'Tab';
                          case 'Alt': return 'Alt';
                          case 'Shift': return 'Shift';
                          default : return c.toUpperCase();
                        }
                      })()}</span>
                    {idx === shortcut.combination.length - 1 ? null : <span className={styles.text}> + </span>}
                  </>
                } else {
                  return <>
                    <span className={styles.input} style={c === 'Shift' ? { width: "64px" } : null}>{
                      (() => {
                        switch(c) {
                          case 'Control' : return 'Ctrl';
                          case 'ArrowUp' : return '↑';
                          case 'ArrowLeft' : return '←';
                          case 'Tab': return 'Tab';
                          case 'Alt': return 'Alt';
                          case 'Shift': return 'Shift';
                          default : return c.toUpperCase();
                        }
                      })()}</span>
                    {idx === shortcut.combination.length - 1 ? null : <span className={styles.text}> + </span>}
                  </>
                }
              })}
            </div>
            {
              visible && 
              <div className={styles.btn_container}>
                  <button className={styles.retry_btn} onClick={() => {
                    setCurrentIdx(idx => idx);
                    setCurrentKeyIdx(idx => 0);
                    setVisible(false);
                    setComplete(false);
                  }}>다시하기</button>
                  <button className={styles.next_btn} onClick={() => {
                    setCurrentIdx(idx => idx + 1);
                    setCurrentKeyIdx(idx => 0);
                    setVisible(false);
                    setComplete(false);
                    currentIdx === shortcuts.length-2 && handler();
                  }}>
                  넘어가기
                  </button>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticeShortcut;