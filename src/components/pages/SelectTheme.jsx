import React from 'react';
import styled from 'styled-components';
import bg from '../../img/back.png'
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
        <Container>
            <Bg>
                <Title>테마 선택</Title>
                <Select 
                    style={isBase ? {color: '#38405D', fontWeight: 'bold'} : {}} 
                    onClick={handler1}>
                    기초
                </Select>
                <Select 
                    style={isPract ? {color: '#38405D', fontWeight: 'bold'} : {}} 
                    onClick={handler2}>
                    실천
                </Select>
                <BoxWrapper>
                    <Box>{contents[0]}</Box>
                    <Box>{contents[1]}</Box>
                    <Box>{contents[2]}</Box>
                </BoxWrapper>
            </Bg>
            <Wrapper>
                <Img src={person}></Img>
                <SpeechWrapper>
                    <SpeechBubble src={speach_buble}></SpeechBubble>
                    <SpeechText>이유리 님 ________ 부탁해요 ~! 😊</SpeechText>
                    <ChoiceTheme>HTML</ChoiceTheme>
                </SpeechWrapper>
                <Button onClick={moveTyping}>타자 치러 가기</Button>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1920px;
`;

const Bg = styled.div`
    width: 1180px;
    height: 558px;
    background-image: url(${bg});
    margin-top: 42px;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #38405D;
  margin-left: 606px;  
`;

const Select = styled.div`
    font-size: 18px;
    color: #98A2B3;
    margin-top: 22px;
    margin-left: 38px;
    cursor: pointer;

    &:nth-child(2) {
        margin-top: 62px;
    }
`;

const BoxWrapper = styled.div`
    display: flex;
    column-gap: 60px;
    width: 1068px;
    height: 500px;    
    margin-top: -65px;
    margin-left: 230px;
`;

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 150px;
    background-color: #E4E7EC;
    border-radius: 4px;

    &:hover {
        box-shadow: 0 0 0 2px #38405D inset;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1180px;
`;

const Img = styled.img`
    margin-top: 109px;
`;

const SpeechWrapper = styled.div`
    margin-top: -80px;
    margin-left: -46px;
`;

const SpeechBubble = styled.img`
    margin-top: -100px;
    margin-left: -300px;
`;

const SpeechText = styled.div`
    margin-top: -70px;
    margin-left: -200px;
    font-size: 18px;
    font-weight: 600;
`;

const ChoiceTheme = styled.div`
    margin-top: -26px;
    margin-left: -113px;
    font-size: 18px;
    font-weight: bold;
`;

const Button = styled.button`
    width: 224px;
    height: 58px;
    margin-top: -178px;
    border: 0;
    cursor: pointer;
    color: white;
    background-color: #1C3796;
    border-radius: 4px;
`;

export default SelectTheme;