import styles from '@/styles/SignUp.module.css';
import React from 'react';

const SignUp = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.welcome}>Welcome!</h1>
            <p className={styles.text}>Sign Up to ITyping</p>
            <form className={styles.form}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type='email' placeholder='Email을 입력해주세요'/>
                <label className={styles.label}>Password</label>
                <input className={styles.input} type='password' placeholder='Password를 입력해주세요'/>
                <label className={styles.label}>닉네임</label>
                <input className={styles.input} type='text' maxLength='6' placeholder='닉네임을 입력해주세요(최대 6글자)'/>
                <button className={styles.sign_up_btn} formAction=''>Sign Up</button>
            </form>
            <div className={styles.or}>OR</div>
            <button className={styles.google_btn}>Sign Up with Google</button>
        </div>
    )
}

export default SignUp;