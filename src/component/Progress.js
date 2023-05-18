import styles from '@/styles/Progress.module.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <div className={styles.tool_img}>
                    <img src='vscode.png'/>
                </div>
                <div className={styles.text_box}>
                    <div className={styles.title}>
                        Visual Studio Code
                    </div>
                    <div className={styles.tag}>
                        개발 코드
                    </div>
                </div>
            </div>
            <div className={styles.right_container}>
                <CircularProgressbar value={28} text={`28%`} styles={buildStyles({
                    pathColor: '#6C5DD3',
                    textColor: '#FFFFFF',
                    trailColor: '#F3EEFF',
                })}/>;
            </div>
        </div>
    );
}

export default Progress;