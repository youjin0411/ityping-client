import React from 'react';
import styled from 'styled-components';
import image from '../../img/image.png';
import useMoveScroll from '../Hook/useMoveScroll';

function Tutorial(props) {

    const {element, onMoveToElement} = useMoveScroll()

    return (
        <>
            <Wrapper>
                <ContentWrapper>
                    <Title>TITLE</Title>
                    <Content>
                        Online Typing Practice for Programmers<br/>
                        테마를 선택해 원하는 코딩을 해보며<br/>
                        타자 연습을 하고 코드도 배우는 웹사이트
                    </Content>
                    <div></div>
                </ContentWrapper>
                <Img src={image}/>
            </Wrapper>
            <MoveScroll onClick={onMoveToElement}>▼</MoveScroll>
            <Container ref={element}></Container>
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
    text-align: center;
    font-size: 40px;
    cursor: pointer;
`;

const Container = styled.div`
`;

export default Tutorial;