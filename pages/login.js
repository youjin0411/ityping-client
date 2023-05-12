import styles from '@/styles/Login.module.css';
import React, { useState } from 'react';

const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    
    const handleIdChange = (e) => {
        setId(e.target.value);
    }

    const handlePwChange = (e) => {
        setPw(e.target.value);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.welcome}>Welcome!</h1>
            <p className={styles.text}>ITyping 로그인하기</p>
            <form className={styles.form}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type='email' placeholder='Email을 입력해주세요' onChange={handleIdChange}/>
                <label className={styles.label}>Password</label>
                <input className={styles.input} type='password' placeholder='Password를 입력해주세요' onChange={handlePwChange}/>
                <button className={styles.login_btn} disabled={id.length === 0 || pw.length === 0}>Login</button>
            </form>
            <div className={styles.or}>OR</div>
            <button className={styles.google_btn}><img className={styles.google_img} src='google.png'/>Sign in with Google</button>
        </div>
    )
}   

export default Login;