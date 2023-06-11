import Navbar from '@/src/component/Navbar';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/Emmat.module.css';
import { emmats } from '@/public/emmats';
import { useState } from 'react';
import Modal from '@/src/component/Modal';

const TrainingEmmat = () => {
	const [currentIdx, setCurrentIdx] = useState(0);
	const [visible, setVisible] = useState(false);
	const [isDisable, setIsDisable] = useState(false);
	const [text, setText] = useState('');
	const [color, setColor] = useState('');
	const emmat = emmats[currentIdx];

	const handlerEmmat = e => {
		setText(e.target.value);
		if(e.target.value === emmats[currentIdx].emmat) {
			setColor("#C9EEDC");
		} else {
			setColor("#FFDDDD");
		}
	}

	return (
		<>
			{currentIdx === emmats.length-1 ? <Modal title="Visual Studio Code 단축어 실습"/> : ""}
			<div style={currentIdx === emmats.length-1 ? {width: "100%", height: "100%", backgroundColor: "#D9D9D9", opacity: "50%"} : null}>
				<Navbar/>
				<div className={styles.container}>
					<Sidebar isStudy={false} isSelected={true}/>
					<div className={styles.right_container}>
						<div className={styles.title_container}>
							<p className={styles.title}>Visual Studio Code 단축어 실습</p>
							<p className={styles.title}>제시된 의미에 맞는 단축어를 입력하세요!</p>
						</div>
						<div className={styles.page_container}>
							<div className={styles.current_page}>{currentIdx + 1}</div>
							<div className={styles.line}> | </div>
							<div className={styles.all_page}>{emmats.length}</div>
						</div>
						<div className={styles.card} style={{backgroundImage: "url('/images/training_card.png')"}}>
							<div className={styles.card_content}>{emmat.description}</div>
						</div>
						<div className={styles.input_container}>
							<label className={styles.text}>답</label>
							<input className={styles.input} style={ visible ? {backgroundColor: color} : null} disabled={isDisable} value={text} onChange={handlerEmmat}/>
						</div>
						{
							!visible ?
							<button className={styles.enter_btn}
								onClick={() => {
									setVisible(true);
									setIsDisable(true);
							}}>입력완료</button>
							:
							<button className={styles.retry_btn}
								style={{marginTop: "40px"}}
								onClick={() => {
									setText('');
									setIsDisable(false);
									setCurrentIdx(idx => idx + 1);
									setVisible(false);	
								}}>나중에 한 번 더</button>
						}
						</div>
				</div>
			</div>
		</>
	);
}

export default TrainingEmmat;