import Navbar from '@/src/component/Navbar';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/SelectGame.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';

const SelectGame = () => {
	return (
		<>  
			<Navbar/>
			<div className={styles.container}>
				<Sidebar isStudy={true} isSelected={true}/>
				<div className={styles.right_container}>
				</div>
			</div>
		</>
	);
}

export default SelectGame;