import styles from "@/styles/SelectTool.module.css";
import { useRouter } from "next/router";
import React from "react";

const SelectTool = (props) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box} style={{backgroundColor: props.background_color}}>For {props.job_en}</div>
        <div className={styles.content_container}>
          <h4>{props.job_ko}를 위한 툴</h4>
          <div className={styles.tools_container}>
            {props.tools.map((tool) => {
              return (
                <div className={styles.tool_container} 
                  key={tool.name} 
                  onClick={() => router.push('/practice/shortcut')}>
                  <div className={styles.img_box} style={{backgroundColor:tool.color}}><img className={styles.tool_img} src={`/images/${tool.img}`} /></div>
                  <div className={styles.tool_contents}>
                    <h3>{tool.name}</h3>
                    <p className={styles.tool_info}>{tool.info}</p>
                  </div>
                  <img className={styles.move_img} src='/images/move.png'/>
                </div>
              );
            })}
            <div className={styles.tool_container}>
              <img className={styles.locked_tool_img} src='/images/locked_tool.png'/>
              <div className={styles.tool_contents}>
                <h3 className={styles.locked_text}>오픈 예정</h3>
              </div>
              <img className={styles.lockced_move_img} src='/images/locked_move.png'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectTool;
