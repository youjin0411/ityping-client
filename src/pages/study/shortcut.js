import Card from '@/src/component/Card';
import Navbar from '@/src/component/Navbar';
import Progress from '@/src/component/Progress';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/Study.module.css';
import { useRouter } from 'next/router';

const StudyShortCut = (props) => {
    const router = useRouter();

    return (
        <>  
            <Navbar/>
            <div className={styles.container}>
                <Sidebar title='단축키 학습' image='/images/study.png'/>
                <div className={styles.right_container}>
                    <Progress/>
                    <div className={styles.menu_container}>
                        <select className={styles.left_menu} onChange={() => router.push('/study/emmat')}>
                            <option key='shortcut' selected>단축키</option>
                            <option key='emmat'>단축어</option>
                        </select>
                        <div className={styles.right_menu}>
                            <div className={styles.menu_btn}><a>연습</a></div>
                            <div className={styles.menu_btn}><a>실습</a></div>
                            <div className={styles.menu_btn}><a>게임</a></div>
                        </div>
                    </div>
                    <div className={styles.content_container}>
                        <Card title='Crtl + F' content='파일 내 내용 검색'/>
                        <Card title='Crtl + F' content='파일 내 내용 검색'/>
                        <Card title='Crtl + F' content='파일 내 내용 검색'/>
                        <Card title='Crtl + F' content='파일 내 내용 검색'/>
                        <Card title='Crtl + F' content='파일 내 내용 검색'/>
                        <Card title='Crtl + F' content='파일 내 내용 검색'/>
                        <Card title='Crtl + F' content='파일 내 내용 검색'/>
                        <Card title='Crtl + F' content='파일 내 내용 검색'/>
                        <Card title='Crtl + F' content='파일 내 내용 검색'/>
                        <Card title='Crtl + F' content='파일 내 내용 검색'/>
                        <Card title='Crtl + F' content='파일 내 내용 검색'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudyShortCut;