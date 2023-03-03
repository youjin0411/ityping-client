import React, {useState} from 'react';
import styled from 'styled-components';
import image from '../../img/circle.png';
import { useHistory } from 'react-router-dom';

function CodeReview(props) {
    const history = useHistory();

    const handler2 = () => {
        history.push('/code-reviewpract');
    }

    const handler1 = () => {
        history.push('/code-reviewbase');
    }

    const [border, setBorder] = useState('0px solid white');

    return (
        <div>
            <Wrapper>
                <Img src ={image}></Img>
                <Divtheme> «&nbsp;&nbsp;코드리뷰&nbsp;&nbsp;» </Divtheme>
                <Widthline/>
                <div style={
                    {maxWidth: '53.95vw',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    textAlign: 'center',
                    marginTop: '2vw',
                    marginLeft: '15vw',
                    }
                } onClick={ () => setBorder('2px solid #38405D') }>
                    <Box style={{border}}>HTML</Box>
                </div>
                <Text1 onClick={handler1}>기초</Text1>
                <Text2 onClick={handler2}>실천</Text2>
                <Heightline/>
            </Wrapper>
            <div style={{
                marginTop: '3.5vw',
            }}>
                <Button>코드 리뷰 보러 가기</Button>
            </div>
        </div>
    )
}

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
    margin-bottom: 2vw;`;
const Box = styled.div`
    margin-top: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E4E7EC;
    width: 16vw;
    height: 9vw;
    border-radius: 4px;
    grid-column-gap: 2vw;`;
const Text1 = styled.div`
    float: left;
    margin-top: -8vw;
    margin-left: 2.5vw;
    font-family: 'Noto Sans KR', sans-serif;
    color: #38405D;
    font-weight: bold;
    cursor: pointer;
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
    margin-top: -15.5vw;
`;

export default CodeReview;