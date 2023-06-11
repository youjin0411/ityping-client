import styles from '@/styles/Modal.module.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Confetti from 'react-confetti'

const Modal = (props) => {

    return (
        <div className={styles.container}>
            <Confetti
                width="515px"
                height="388px"
                numberOfPieces={30}
                colors={['#CAB0FF']}
            />
            <div className={styles.title}>{props.title}</div>
            <div className={styles.text}>연습 완료!</div>
            <div className={styles.progress}>
                <CircularProgressbar value={100} text={`100%`} styles={buildStyles({
                        pathColor: '#6C5DD3',
                        textColor: '#6C5DD3',
                        trailColor: '#F3EEFF'
                })}/>
            </div>
            <div className={styles.btn_container}>
                <button className={styles.btn}>다시하기</button>
                <button className={styles.btn}>나가기</button>
            </div>
        </div>
    );
}

export default Modal;