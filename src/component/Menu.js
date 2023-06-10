import styles from '@/styles/Menu.module.css';

const Menu = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu_btn}><a href={props.isShortcut ? '/practice/shortcut' : '/practice/emmat'}>연습</a></div>
            <div className={styles.menu_btn}><a>실습</a></div>
            <div className={styles.menu_btn}><a>게임</a></div>
        </div>
    );
}

export default Menu;