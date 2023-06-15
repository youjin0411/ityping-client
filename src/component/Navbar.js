import styles from '@/styles/Navbar.module.css';
import Cookies from 'js-cookie';
import React from "react";

const Navbar = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.logo}><a href='/'><img src='/images/logo.png'/></a></div>
				<div className={styles.container}>
					{
						// 서버 연결 시 느낌표 지우기
						!Cookies.get('login') ? 
						<a href='/mypage'>
							<div className={styles.profile_container}>
								<img className={styles.profile} src='/images/profile.png'/>
								<div className={styles.user_container}>
									<p className={styles.name}>Yiyoori</p>
									<p className={styles.email}>d2133@e-mirim.hs.kr</p>
								</div>
							</div>
						</a>
						:
						<>
							<div className={styles.login}><a href='/login'>로그인</a></div>
							<div className={styles.sign_up}><a href='/signup'>회원가입</a></div>
						</>
					}
				</div>
			</header>
		</>
	)
}

export default Navbar;