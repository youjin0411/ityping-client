import styles from '@/styles/Card.module.css';
import { useState } from 'react';

const Card = (props) => {
    const [isHovering, setIsHovering] = useState(0);

    return (
        <div className={ isHovering ? styles.container_hover : styles.container}
            onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}
        >
            <div className={styles.title}>
                {props.title}
            </div>
            <div className={styles.content}>
                {props.content}
            </div>
            {props.example ? <pre className={styles.example}>ex) {props.example}</pre> : ''}
        </div>
    );
}

export default Card;