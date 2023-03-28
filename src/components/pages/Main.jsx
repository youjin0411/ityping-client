import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import image from '../../img/image.png';

const Main = (props) => {
    const history = useHistory();

    const handler = () => {
        history.push('/select-themeBase');
    }

    return (
        <Wrapper>
            <ContentWrapper>
                <Title>TITLE</Title>
                <Content>
                    Online Typing Practice for Programmers<br/>
                    테마를 선택해 원하는 코딩을 해보며<br/>
                    타자 연습을 하고 코드도 배우는 웹사이트
                </Content>
                <Button onClick={handler}>START</Button>
            </ContentWrapper>
            <Img src={image}/>
        </Wrapper>
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

const Button = styled.button`
    width: 150px;
    height: 50px;
    border: 0;
    margin-top: 220px;
    cursor: pointer;
    background-color: #1C3796;
    border-radius: 4px;
    color: white;
    font-size: 25px;
`;

const Img = styled.img`
    max-width: 570px;
    max-height: 470px;
    margin-top: 220px;
`;

export default Main;