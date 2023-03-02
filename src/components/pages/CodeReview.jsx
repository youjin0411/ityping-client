import React from 'react';
import styled from 'styled-components';
import back from '../../img/back.png';

function CodeReview(props) {
    return (
        <Wrapper>
            <Container background={back}>

            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 1180px;
    height: 560px;
    background: url(${back});
`;

export default CodeReview;