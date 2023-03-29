import React from 'react';
import styled from 'styled-components';
import image from '../../img/circle.png';
import person from '../../img/person.png';
import speach_buble from '../../img/speach_buble.png';
import { useHistory } from 'react-router-dom';

const SelectTheme = (props) => {
    const {contents, isBase, isPract} = props;

    const history = useHistory();

    const handler1 = () => {
        history.push('/select-themeBase');
    }

    const handler2 = () => {
        history.push('/select-themePract');
    }

    const moveTyping = () => {
        history.push('/typing');
    }

    return (
        <div>
            <Wrapper>
                <Img src ={image}></Img>
                <Divtheme> &lt; 테마선택 &gt;</Divtheme>
                <Widthline/>
                <div style={{
                    maxWidth: '53.95vw',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    textAlign: 'center',
                    marginTop: '2vw',
                    marginLeft: '15vw'
                }}>
                    <Box>{contents[0]}</Box>
                    <Box>{contents[1]}</Box>
                    <Box>{contents[2]}</Box>
                </div>
                <Text1 style={isBase ? {color: '#38405D', fontWeight: 'bold'} : {}} 
                    onClick={handler1}>기초</Text1>
                <Text2 style={isPract ? {color: '#38405D', fontWeight: 'bold'} : {}} onClick={handler2}>실천</Text2>
                <Heightline/>
            </Wrapper>
            <div style={{
                marginTop: '3.5vw'
            }}>
                <Button onClick={moveTyping}>타자 치러 가기</Button>
                <Personimg src={person}></Personimg>
                <SpeechBubble src={speach_buble}></SpeechBubble>
                <SpeechText>이유리 님 ________ 부탁해요 ~! 😊</SpeechText>
                <ChoiceTheme>HTML</ChoiceTheme>
            </div>
        </div>
    )
}
const ChoiceTheme = styled.div`
    font-size: 1.5vw;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif;
    margin-left: 40.7vw;
    margin-top: -2.3vw;
`;

const SpeechText = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.5vw;
    margin-left: 33vw;
    margin-top: -18vw;
`;

const SpeechBubble = styled.img`
    width: 31vw;
    height : 5vw;
    margin-bottom: 14vw;
    margin-left: -7vw;
`;

const Personimg = styled.img`
    width: 25vw;
    margin-left: 10vw;
`;

const Button = styled.button`
    width: 14vw;
    height: 3.47vw;
    border: 0;
    cursor: pointer;
    background-color: #1C3796;
    border-radius: 4px;
    color: white;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1rem;
    float: right;
    margin-right: 13vw;
`;

const Box = styled.div`
    margin-top: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E4E7EC;
    width: 16vw;
    height: 9vw;
    border-radius: 4px;
    grid-column-gap: 2vw;
`;

const Text1 = styled.div`
    float: left;
    margin-top: -8vw;
    margin-left: 2.5vw;
    font-family: 'Noto Sans KR', sans-serif;
    cursor: pointer;
    color: #98A2B3;
`;

const Text2 = styled.div`
    float: left;
    margin-top: -5vw;
    margin-left: 2.5vw;
    font-family: 'Noto Sans KR', sans-serif;
    cursor: pointer;
    color: #98A2B3;
`;

const Img = styled.img`
    float: left;
    width: 4vw;
    height: 1vw;
    margin-left: 2vw;
    margin-top: 1.2vw;
`;

const Wrapper = styled.div`
    border: 1px solid #667085;
    border-radius: 5px;
    text-align: center;
    width: 1180px;
    height: 560px;
    margin : 0 auto;
    margin-top: 6.925vh;
`;

const Divtheme = styled.div`
    font-size: 1.2vw;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif;
    padding-top: 0.7vw;
`;

const Widthline = styled.hr`
    position: absolute;
    width: 1070px;
    background: #667085;
    margin-left: 7.9900vw;
`;

const Heightline = styled.hr`
    width: 0.01vw;
    height: 560px;
    margin: 0 auto;
    margin-left: 7.9999vw;
    margin-top: -15.5vw;
`;

export default SelectTheme;