import styles from '@/styles/Login.module.css';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../_actions/user_login';

const Login = () => {
    // const dispatch = useDispatch();

    // const [Email, setEmail] = useState("");
    // const [Password, setPassword] = useState("");

    // const onEmailHandler = (event) => {
    //     setEmail(event.currentTarget.value);
    // }
    // const onPasswordHandler = (event) => {
    //     setPassword(event.currentTarget.value);
    // }
    // const onSubmitHandler = (event) => {
    //     // 버튼만 누르면 리로드 되는것을 막아줌
    //     event.preventDefault();

    //     console.log('Email', Email);
    //     console.log('Password', Password);
        
    //     let body = {
    //         email: Email,
    //         password: Password,
    //     }

    //     dispatch(loginUser(body));
    // }

    return (
        <div className={styles.container}>
            <h1 className={styles.welcome}>Welcome!</h1>
            <p className={styles.text}>Login to ITyping</p>
            {/* <form className={styles.form} onSubmit={onSubmitHandler}> */}
            <form className={styles.form}>
                <label className={styles.label}>Email</label>
                {/* <input className={styles.input_email} type='email' value={Email} onChange={onEmailHandler} placeholder='Email을 입력해주세요'/> */}
                <input className={styles.input} type='email' placeholder='Email을 입력해주세요'/>
                <label className={styles.label}>Password</label>
                {/* <input className={styles.input_pw} type='password' value={Password} onChange={onPasswordHandler} placeholder='Password를 입력해주세요'/> */}
                <input className={styles.input} type='password' placeholder='Password를 입력해주세요'/>
                {/* <button className={styles.login_btn} formAction=''>Login</button> */}
                <button className={styles.login_btn}>Login</button>
            </form>
            <div className={styles.or}>OR</div>
            <button className={styles.google_btn}>Sign in with Google</button>
        </div>
    )
}   

export default Login;