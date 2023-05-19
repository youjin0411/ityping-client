import Card from '@/src/component/Card';
import Navbar from '@/src/component/Navbar';
import Progress from '@/src/component/Progress';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/Emmat.module.css';

const Emmat = (props) => {

    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <Sidebar/>
                <Progress/>
                <Card title='.클래스명' content='클래스명을 가진 div 태그 생성'/>
            </div>
        </>
    );
}

export default Emmat;