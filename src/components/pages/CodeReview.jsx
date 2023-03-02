import React from 'react';
import styled from 'styled-components';

function CodeReview(props) {
    return (
        <Wrapper>
            <Widthline/>
            <Heightline/>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    border: 1px solid #667085;
    border-radius: 5px;
    text-align: center;
    width: 71.9444vw;
    height: 68.75vh;
    margin : 0 auto;
    margin-top: 6.925vh;`
    ;
const Widthline = styled.hr`
    position: absolute;
    width: 63.95vw;
    background: #667085;
    margin-top: 7.9167vh;
    margin-left: 7.9900vw;`;
const Heightline = styled.hr`
    width: 0.01vw;
    height: 68.6vh;
    margin: 0 auto;
    margin-left: 7.9999vw;
`;

export default CodeReview;