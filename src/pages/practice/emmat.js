import Navbar from '@/src/component/Navbar';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/PracticeEmmat.module.css';
import { emmats } from '@/public/emmats';
import { useEffect, useState } from 'react';

const PracticeEmmat = (props) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [visible, setVisible] = useState(1);
    const [isDisable, setIsDisable] = useState(0);
    const [text, setText] = useState('');

    if(currentIdx === emmats.length) {
      return (
        <div>
          <h1>끝</h1>
          <button onClick={() => {
            setCurrentIdx(0)
          }}>다시 하기</button>
        </div>
      )
    }
  
    const emmat = emmats[currentIdx];

    const handlerEmmat = e => {
        setText(e.target.value);
        console.log(e.target.value);
        if(e.target.value === emmats[currentIdx].emmat) {
            setIsDisable(!isDisable);
        }
    }

    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <Sidebar isStudy={false} isSelected={true}/>
                <div className={styles.right_container}>
                    <div className={styles.title_container}>
                        <p className={styles.title}>Visual Studio Code 단축키 연습</p>
                        <p className={styles.title}>단축키와 의미를 익히고 따라쳐보며 암기해보세요!</p>
                    </div>
                    <div className={styles.page_container}>
                        <div className={styles.current_page}>{currentIdx + 1}</div>
                        <div className={styles.line}> | </div>
                        <div className={styles.all_page}>{emmats.length}</div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_title}>{emmat.emmat}</div>
                        <div className={styles.card_content}>{emmat.description}</div>
                    </div>
                    <div className={styles.input_container}>
                        <label className={styles.text}>연습</label>
                        <input className={styles.input} disabled={isDisable} value={text} placeholder={emmats[currentIdx].emmat} onChange={handlerEmmat}/>
                    </div>
                    {
                    visible ? 
                    <button className={styles.enter_btn} disabled={!isDisable} onClick={() => setVisible(!visible)}>
                        입력 완료
                    </button>
                    :
                    <div className={styles.btn_container}>
                        <button className={styles.retry_btn}>다시하기</button>
                        <button className={styles.next_btn}
                            onClick={() => {
                                setText('');
                                setIsDisable(!isDisable);
                                setCurrentIdx(idx => idx + 1);
                                setVisible(!visible);
                            }
                        }>
                        넘어가기
                        </button>
                    </div>
                    }
                </div>
            </div>
        </>
    );
}

export default PracticeEmmat;