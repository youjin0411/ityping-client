import React from 'react';
import styled from 'styled-components';
import image from '../../img/circle.png';

function SelectTheme(props) {
    return (
        <Wrapper>
            <Img src ={image}></Img>
            <Divtheme> «&nbsp;&nbsp;테마선택&nbsp;&nbsp;» </Divtheme>
            <Widthline/>
            <Text1>기초</Text1>
            <Text2>실천</Text2>
            <Heightline/>
        </Wrapper>
    )
}
const Text1 = styled.a`
    float: left;
    margin-left: 2vw;
    margin-top: 5vw;`;
const Text2 = styled.div`
    float: left;
    margin-left: -3vw;
    margin-top: 9vw;`;
const Img = styled.img`
    float: left;
    width: 4vw;
    height: 1vw;
    margin-left: 2vw;
    margin-top: 1.2vw`;
const Wrapper = styled.div`
    border: 1px solid #667085;
    border-radius: 5px;
    text-align: center;
    width: 71.9444vw;
    height: 68.75vh;
    margin : 0 auto;
    margin-top: 6.925vh;`
    ;
const Divtheme = styled.div`
    font-size: 1.2vw;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif;
    padding-top: 0.7vw;`;
const Widthline = styled.hr`
    position: absolute;
    width: 63.95vw;
    background: #667085;
    margin-left: 7.9900vw;`;
const Heightline = styled.hr`
    width: 0.01vw;
    height: 68.6vh;
    margin: 0 auto;
    margin-left: 7.9999vw;
    margin-top: -2.5vw;
`;
export default SelectTheme;