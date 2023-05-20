import Card from '@/src/component/Card';
import Navbar from '@/src/component/Navbar';
import Progress from '@/src/component/Progress';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/Practice.module.css';
import { useRouter } from 'next/router';

const StudyEmmat = (props) => {
    const router = useRouter();

    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <Sidebar title='단축키 학습' image='/images/study.png'/>
                <div className={styles.right_container}>
                    <Progress/>
                    <div className={styles.menu_container}>
                        <select className={styles.left_menu} onChange={() => router.push('/practice/shortcut')}>
                            <option key='shortcut'>단축키</option>
                            <option key='emmat' selected>단축어</option>
                        </select>
                        <div className={styles.right_menu}>
                            <div className={styles.menu_btn}><a>연습</a></div>
                            <div className={styles.menu_btn}><a>실습</a></div>
                            <div className={styles.menu_btn}><a>게임</a></div>
                        </div>
                    </div>
                    <div className={styles.content_container}>
                        <Card title='.클래스명' content='클래스명을 가진 div 태그를 만들어준다.' example='.container'/>
                        <Card title='.클래스명' content='클래스명을 가진 div 태그를 만들어준다.' example='.container'/>
                        <Card title='.클래스명' content='클래스명을 가진 div 태그를 만들어준다.' example='.container'/>
                        <Card title='.클래스명' content='클래스명을 가진 div 태그를 만들어준다.' example='.container'/>
                        <Card title='.클래스명' content='클래스명을 가진 div 태그를 만들어준다.' example='.container'/>
                        <Card title='.클래스명' content='클래스명을 가진 div 태그를 만들어준다.' example='.container'/>
                        <Card title='.클래스명' content='클래스명을 가진 div 태그를 만들어준다.' example='.container'/>
                        <Card title='.클래스명' content='클래스명을 가진 div 태그를 만들어준다.' example='.container'/>
                        <Card title='.클래스명' content='클래스명을 가진 div 태그를 만들어준다.' example='.container'/>
                        <Card title='.클래스명' content='클래스명을 가진 div 태그를 만들어준다.' example='.container'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudyEmmat;