import Card from '@/src/component/Card';
import Menu from '@/src/component/Menu';
import Navbar from '@/src/component/Navbar';
import Progress from '@/src/component/Progress';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/Study.module.css';
import { useRouter } from 'next/router';
import { emmats } from '@/public/emmats';

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
                        <select className={styles.left_menu} onChange={() => router.push('/study/shortcut')}>
                            <option key='shortcut'>단축키</option>
                            <option key='emmat' selected>단축어</option>
                        </select>
                        <Menu/>
                    </div>
                    <div className={styles.content_container}>
                        {emmats.map((e) => <Card title={e.emmat} content={e.description} example={e.example}/>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudyEmmat;