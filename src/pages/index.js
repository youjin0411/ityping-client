import styles from "@/styles/Main.module.css";
import React from "react";
import Navbar from "../component/Navbar";
import SelectTool from "../component/SelectTool";
import Sidebar from "../component/Sidebar";

const Home = () => {
  const developer_tools = [
    {
      "img" : "vscode.png",
      "name" : "Visual Studio Code",
      "info" : "마이크로소프트에서 개발한 윈도우, macOS, 리눅스용으로 개발한 소스 코드 편집기",
      "color" : "#D0ECFF",
      "hover" : "#F1FAFF"
    },
    {
      "img" : "intellij.png",
      "name" : "IntelliJ",
      "info" : "JetBrains사에서 제작한 상용 자바 통합 개발 환경",
      "color" : "#F3D2D2",
      "hover" : "#FFF6F6"
    }
  ]

  const designer_tools = [
    {
      "img" : "photoshop.png",
      "name" : "Adobe Photoshop",
      "info" : "어도비 시스템즈사에서 개발한 픽셀을 기본단위로 하는 비트맵 방식의 레스터 그래픽 편집기",
      "color" : "#D0ECFF",
      "hover" : "#F1FAFF"
    },
    {
      "img" : "illustrator.png",
      "name" : "Adobe Illustrator",
      "info" : "어도비 시스템즈사에서 개발한 벡터 드로잉 프로그램",
      "color" : "#F3D2D2",
      "hover" : "#FFF6F6"
    }
  ]

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Sidebar isStudy={false} isSelected={true}/>
        <div className={styles.contents}>
          <h2 style={{color: '#6C5DD3'}}>Welcome!</h2>
          <h3 style={{fontSize: '18px'}}>필요한 툴의 단축키를 학습해보세요!</h3>
          <div className={styles.contents_container}>
            <SelectTool tools={developer_tools} job_en="Developer" job_ko="개발자"/>
            <SelectTool tools={designer_tools} job_en="Designer" job_ko="디자이너"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
