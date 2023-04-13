import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';

const CodeReviewCheck = (props) => {
    return (
        <div>
            <Navbar/>
            <Wrapper>
                <Divtheme> 기초 &gt;  HTML &gt;  코드 리뷰 </Divtheme>
                <Widthline/>
                <header>
				<hgroup style={{ minHeight: '50px', marginTop: '7rem',padding: '20px'}}>
					<div class="title" style={{fontSize: '2rem'}}><a href="https://opentutorials.org/course/1" style={{textDecorationLine: 'none', target: 'blank', color : '#000'}}>생활코딩</a></div>
					<div class="subtitle">Coding Everybody</div>
				</hgroup>
			</header>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    border: 1px solid #667085;
    border-radius: 5px;
    text-align: center;
    width: 83.9444vw;
    height: 110.75vh;
    margin : 0 auto;
    margin-top: 6.925vh;
`;

const Divtheme = styled.div`
    font-size: 1.2vw;
    font-family: 'Noto Sans KR', sans-serif;
    float: left;
    padding-top: 0.7vw;
    margin-left: 1vw;
`;

const Widthline = styled.hr`
    position: absolute;
    width: 83.8vw;
    background: #667085;
    margin-top: 3.2vw;
`;

export default CodeReviewCheck;