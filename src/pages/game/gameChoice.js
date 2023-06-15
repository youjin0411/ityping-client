import Navbar from '@/src/component/Navbar';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/Study.module.css';
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
                <Sidebar isStudy={false} isSelected={true}/>
                <div className={styles.right_container}>
                    <div className={styles.menu_container}>
                        <div className={styles.select} onClick={() => {
                                console.log(showOptions)
                                setShowOptions(!showOptions)
                            }}>
                            <div className={styles.selected}>
                                <div className={styles.label}>{program}</div>
                                {
                                    showOptions ? 
                                    <img className={styles.btn} src='/images/select_up.png' alt='up'/>
                                    :
                                    <img className={styles.btn} src='/images/select_down.png' alt='down'/>
                                }
                            </div>
                            <div className={styles.option_container} style={{ display: showOptions ? 'block' : 'none'}}>
                                <div className={styles.option} onClick={handleOnChangeSelectValue} value='단축키'>매칭게임</div>
                                <a href='/study/emmat'><div className={styles.option} onClick={handleOnChangeSelectValue} value='단축어'>카드 뒤집기</div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudyShortCut;