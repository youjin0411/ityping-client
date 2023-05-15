import styles from "@/styles/Sidebar.module.css";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <a className={styles.text}><img src='study.png'/>단축키 학습</a>
        </div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default Sidebar;
