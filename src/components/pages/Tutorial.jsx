import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import image from '../../img/image.png';
import down from '../../img/down.png';
import useMoveScroll from '../Hook/useMoveScroll';
import tutorial from '../../img/tutorial.png';
import { useHistory } from 'react-router-dom';

const Tutorial = (props) => {
    const history = useHistory();

    const {element, onMoveToElement} = useMoveScroll();

    const handler = () => {
        history.push('/select-themeBase');
    }

    return (
        <>
            <Navbar />
            <Wrapper>
                <ContentWrapper>
                    <Title>ITyping</Title>
                    <Content>
                        Online Typing Practice for Programmers<br/>
                        테마를 선택해 원하는 코딩을 해보며<br/>
                        타자 연습을 하고 코드도 배우는 웹사이트
                    </Content>
                    <div></div>
                </ContentWrapper>
                <Img src={image}/>
            </Wrapper>
            <MoveScroll onClick={onMoveToElement}></MoveScroll>
            <Container ref={element}>
                <img alt='tutorial' src={tutorial}/>
                <Button onClick={handler}>ITyping 시작하기 &gt;&gt;</Button>
            </Container>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 150px;
`;

const Title = styled.h1`
    color: #1C3796;
    font-size: 40px;
`;

const Content = styled.h2`
    font-size: 30px;
`;

const Img = styled.img`
    max-width: 570px;
    max-height: 470px;
    margin-top: 220px;
`;

const MoveScroll = styled.div`
    background-image: url(${down});
    width: 44px;
    height: 44px;
    margin: 80px auto;
    cursor: pointer;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-top: 80px;
    margin-bottom: 150px;
`;

const Button = styled.button`
    width: 280px;
    height: 50px;
    border: 0;
    background-color: #1C3796;
    color: white;
    border-radius: 8px;  
    font-size: 20px;
    text-align: center;
`;

export default Tutorial;