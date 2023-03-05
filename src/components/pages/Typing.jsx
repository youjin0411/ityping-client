import React from 'react';
import styled from 'styled-components';
import image from '../../img/circle.png';

function Typing(props) {
    return (
        <div>
            <Wrapper>
                <Img src ={image}></Img>
                <Divtheme> &lt; html &gt; </Divtheme>
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
                }>
                </div>
                <div style={{textAlign: 'left', marginLeft: '3vw', marginTop: '1.5vw', overflowY:'scroll'}}>&lt;!DOCTYPE html&gt; <br />
                &lt;html lang="en"&gt;<br />
                &lt;head&gt;<br />
                &lt;meta charset="UTF-8"&gt;<br />
                &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;<br />
                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br />
                &lt;link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'/&gt;<br />
                &lt;!-- CSS --&gt; &lt;link rel="stylesheet" href="../css/default.css"/&gt;<br />
                &lt;link rel="stylesheet" href="../css/nav.css"/&gt;<br />
                &lt;link rel="stylesheet" href="./css/info.css"/&gt;<br />
                &lt;title&gt;HOME&lt;title/&gt;<br />
                &lt;/head&gt;<br />
                &lt;body&gt;<br />
                &lt;nav class="nav container" id="nav-toggle"&gt;<br />
                &lt;div class="nav-toggle" id="nav-toggle"&gt;<br />
                &lt;i class='bx bx-menu'&gt;&lt;i&gt;<br />
                </div>
                <Heightline/>
            </Wrapper>
        </div>
    )
}
const Img = styled.img`
    float: left;
    width: 4vw;
    height: 1vw;
    margin-left: 2vw;
    margin-top: 1.5vw`;
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
    font-size: 1.4vw;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif;
    margin-left: -22vw;
    display: inline-block;
    margin: 0 auto;
    margin-left :-16vw;
    margin-top: 1vw;
    `;
const Widthline = styled.hr`
    position: absolute;
    width: 63.95vw;
    margin-top: 1.2vw;
    background: #667085;`;
const Heightline = styled.hr`
    width: 0.01vw;
    height: 68.6vh;
    margin: 0 auto;
    margin-left: 64vw;
    margin-top: -35.7vw;

`;
export default Typing;