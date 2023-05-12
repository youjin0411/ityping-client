import styles from '@/styles/SignUp.module.css';
import React, { useState } from 'react';
import Navbar from '../component/Navbar';

const SignUp = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [nickname, setNickname] = useState('');
    
    const handleIdChange = (e) => {
        setId(e.target.value);
    }

    const handlePwChange = (e) => {
        setPw(e.target.value);
    }

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    }

    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <h1 className={styles.welcome}>Welcome!</h1>
                <p className={styles.text}>ITyping 회원가입하기</p>
                <form className={styles.form}>
                    <label className={styles.label}>Email</label>
                    <input className={styles.input} type='email' placeholder='Email을 입력해주세요' onChange={handleIdChange}/>
                    <label className={styles.label}>Password</label>
                    <input className={styles.input} type='password' placeholder='Password를 입력해주세요' onChange={handlePwChange}/>
                    <label className={styles.label}>닉네임</label>
                    <input className={styles.input} type='text' maxLength='6' placeholder='닉네임을 입력해주세요(최대 6글자)' onChange={handleNicknameChange}/>
                    <button className={styles.sign_up_btn} disabled={id.length === 0 || pw.length === 0 || nickname.length === 0}>회원가입</button>
                </form>
                <div className={styles.or}>OR</div>
                <button className={styles.google_btn}><img className={styles.google_img} src='google.png'/>Sign Up with Google</button>
            </div>
        </>
    )
}

export default SignUp;