import Navbar from '@/src/component/Navbar';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/ShortCut.module.css';
import { useRouter } from 'next/router';

const PracShortCut = (props) => {
    const router = useRouter();

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
                        <div className={styles.current_page}>1</div>
                        <div className={styles.line}> | </div>
                        <div className={styles.all_page}>28</div> 
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card_title}>Ctrl + F</div>
                        <div className={styles.card_content}>파일 내에서 내용 검색</div>
                    </div>
                    <div className={styles.input_container}>
                        <input className={styles.input}/>
                        <input className={styles.input}/>
                        <input className={styles.input}/>
                    </div>
                    <button className={styles.enter_btn}>입력 완료</button>
                    <div className={styles.btn_container}>
                        <button className={styles.retry_btn}>다시하기</button>
                        <button className={styles.next_btn}>넘어가기</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PracShortCut;