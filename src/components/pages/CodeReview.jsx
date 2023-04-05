import React, {useState} from 'react';
import styled from 'styled-components';
import bg from '../../img/back.png'
import { useHistory } from 'react-router-dom';

const CodeReview = (props) => {
    const {contents, isBase, isPract} = props;
    
    const history = useHistory();
    
    const handler1 = () => {
        history.push('/code-reviewBase');
    }

    const handler2 = () => {
        history.push('/code-reviewPract');
    }

    const handler3 = () => {
        history.push('/code-reviewCheck');
    }

    return (
        <Container>
            <Bg>
                <Title>코드리뷰</Title>
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
                    <Box>{contents}</Box>
                </BoxWrapper>
            </Bg>
            <Button onClick={handler3}>코드리뷰 보러가기</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1180px;
    margin: 0 auto;
`

const Bg = styled.div`
    background-image: url(${bg});
    width: 1180px;
    height: 558px;
    margin-top: 72px;
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

const Button = styled.button`
    align-self: flex-end;
    width: 224px;
    height: 58px;
    margin-top: 70px;
    border-radius: 8px;
    background-color: #7986B6;
    color: #ffffff;
`;

export default CodeReview;