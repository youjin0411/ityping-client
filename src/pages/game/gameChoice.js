import Navbar from '@/src/component/Navbar';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/Study.module.css';
import styles2 from '@/styles/GameChoice.module.css'
import { useState } from 'react';

const StudyShortCut = (props) => {
	const [program, setProgram] = useState("Visual Studio Code");
	const [currentValue, setCurrentValue] = useState("단축키");
	const [gameSelec, setgameSelec] = useState("매칭게임");
	const [showOptions, setShowOptions] = useState(false);
  
    const handleOnChangeSelectValue = (e) => {
      setCurrentValue(e.target.getAttribute("value"));
    };

    return (
        <>  
            <Navbar/>
            <div className={styles.container}>
                <Sidebar isStudy={true} isSelected={true}/>
                <div className={styles.right_container}>
                    <div className={styles.menu_container}>
                        <div className={styles.gameBack}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudyShortCut;