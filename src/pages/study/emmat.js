import Card from '@/src/component/Card';
import Menu from '@/src/component/Menu';
import Navbar from '@/src/component/Navbar';
import Progress from '@/src/component/Progress';
import Sidebar from '@/src/component/Sidebar';
import styles from '@/styles/Study.module.css';
import { useState } from 'react';
import { emmats } from '@/public/emmats';

const StudyEmmat = (props) => {
    const [currentValue, setCurrentValue] = useState("단축어");
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
                                setShowOptions(!showOptions)
                            }}>
                            <div className={styles.selected}>
                                <div className={styles.label}>{currentValue}</div>
                                {
                                    showOptions ? 
                                    <img className={styles.btn} src='/images/select_up.png' alt='up'/>
                                    :
                                    <img className={styles.btn} src='/images/select_down.png' alt='down'/>
                                }
                            </div>
                            <div className={styles.option_container} style={{ display: showOptions ? 'block' : 'none'}}>
                                <a href='/study/shortcut'><div className={styles.option} onClick={handleOnChangeSelectValue} value='단축키'>단축키</div></a>
                                <div className={styles.option} onClick={handleOnChangeSelectValue} value='단축어'>단축어</div>
                            </div>
                        </div>
                        <Menu/> 
                    </div>
                    <div className={styles.content_container}>
                        {emmats.map((e) => <Card title={e.emmat} content={e.description} example={e.example}/>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudyEmmat;