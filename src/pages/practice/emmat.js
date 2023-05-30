import Navbar from '@/src/component/Navbar';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/Emmat.module.css';
import { emmats } from '@/public/emmats';
import { useState } from 'react';

const PracEmmat = (props) => {
    const [currentEmmatIndex, setCurrentIndex] = useState(0);
    const currentEmmat = emmats[currentEmmatIndex];
    const [pageNum, setPageNum] = useState(1);

    const handleNextCard = () => {
        if (emmats.length > pageNum) setPageNum(pageNum + 1);
        setCurrentIndex(currentEmmatIndex + 1);
    }

    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <Sidebar title='학습 종료' image='/images/leave.png'/>
                <div className={styles.right_container}>
                    <div className={styles.title_container}>
                        <p className={styles.title}>Visual Studio Code 단축키 연습</p>
                        <p className={styles.title}>단축키와 의미를 익히고 따라쳐보며 암기해보세요!</p>
                    </div>
                    <div className={styles.page_container}>
                        <div className={styles.current_page}>{pageNum}</div>
                        <div className={styles.line}> | </div>
                        <div className={styles.all_page}>{emmats.length}</div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_title}>{currentEmmat.emmat}</div>
                        <div className={styles.card_content}>{currentEmmat.description}</div>
                    </div>
                    <div className={styles.input_container}>
                        <label>연습</label>
                        {emmats.map((e, i) => {
                            <input placeholder={e}/>
                        })}
                    </div>
                    <button className={styles.enter_btn}>
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
}

export default PracEmmat;