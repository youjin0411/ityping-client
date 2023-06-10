import styles from '@/styles/Navbar.module.css';
import React from "react";

const Navbar = () => {
    

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}><a href='/'><img src='/images/logo.png'/></a></div>
                <div className={styles.container}>
                    <div className={styles.login}><a href='/login'>로그인</a></div>
                    <div className={styles.sign_up}><a href='/signup'>회원가입</a></div>
                </div>
            </header>
        </>
    )
}

export default Navbar;