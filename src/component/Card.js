import styles from '@/styles/Card.module.css';

const Card = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.content}>
                {props.content}
            </div>
            {props.example ? <div className={styles.example}>ex) {props.example}</div> : ''}
        </div>
    );
}

export default Card;