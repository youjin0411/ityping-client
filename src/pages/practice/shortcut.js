import Card from '@/src/component/Card';
import Navbar from '@/src/component/Navbar';
import Progress from '@/src/component/Progress';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/ShortCut.module.css';

const ShortCut = (props) => {

    return (
        <>  
            <Navbar/>
            <div className={styles.container}>
                <Sidebar/>
                <Progress/>
                <Card title='Crtl + F' content='파일 내 내용 검색'/>
            </div>
        </>
    );
}

export default ShortCut;