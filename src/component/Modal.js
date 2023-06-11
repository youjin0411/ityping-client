import styles from '@/styles/Modal.module.css';
import JSConfetti from 'js-confetti';
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Modal = (props) => {
    const [jsConfetti, setJsConfetti] = useState(null);
    
    useEffect(() => {
        setJsConfetti(new JSConfetti());
    })

    const handleClick = () => {
        jsConfetti.addConfetti({
          confettiColors: [
            "#CAB0FF"
          ],
          confettiNumber: 500,
        });
    };

    return (
        <div className={styles.container}>
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
                <button className={styles.btn} onClick={handleClick}>다시하기</button>
                <button className={styles.btn}>나가기</button>
            </div>
        </div>
    );
}

export default Modal;