import Navbar from '@/src/component/Navbar';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/Emmat.module.css';
import { useRouter } from 'next/router';

const PracEmmat = (props) => {
    const router = useRouter();

    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <Sidebar title='학습 종료' image='/images/leave.png'/>
                <div className={styles.right_container}>
                    <div>Visual Studio Code 단축키 연습\n단축키와 의미를 익히고 따라쳐보며 암기해보세요!</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <button>입력하기</button>
                    <div>
                        <button>다시하기</button>
                        <button>넘어가기</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PracEmmat;