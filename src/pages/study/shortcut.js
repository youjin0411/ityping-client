import Card from '@/src/component/Card';
import Menu from '@/src/component/Menu';
import Navbar from '@/src/component/Navbar';
import Progress from '@/src/component/Progress';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/Study.module.css';
import { useState } from 'react';
import { shortcuts } from '@/public/shortcuts';

const StudyShortCut = (props) => {
    const [currentValue, setCurrentValue] = useState("단축키");
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
                    <Progress/>
                    <div className={styles.menu_container}>
                        <div className={styles.select} onClick={() => {
                                console.log(showOptions)
                                setShowOptions(!showOptions)}
                            }>
                            <div className={styles.label}>{currentValue}</div>
                            <div className={styles.option_container} style={{ display: `${showOptions ? 'block' : 'none'}`}}>
                                <div className={styles.option} onClick={handleOnChangeSelectValue}>단축키</div>
                                <div className={styles.option} onClick={handleOnChangeSelectValue}>단축어</div>
                            </div>
                        </div>
                        <Menu isShortcut={true}/>
                    </div>
                    <div className={styles.content_container}>
                    {shortcuts.map((s) => <Card title={s.text} content={s.description}/>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudyShortCut;