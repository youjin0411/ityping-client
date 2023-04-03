import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import bg from '../../img/back2.png'
import "./TypingStyle.css";

const Typing = () => {
    //keyState 값을 변경할때마다 리렌더링 된다. keyState는 빈객체를 초기값으로 가진다.
    const [keyState, setKeyState] = useState() 
    // useEffect는 렌더링이 끝난 후에 실행된다. 즉 useState 값이 변경(랜더링)되고 난 후에 실행된다. 
    // 즉, 특정 값이 변경 된 후 실행됨. 
    useEffect(() => {
        const handleKeyDown = (e) => {
            console.log('handleKeyDown')
            // prev는 이전의 keyState를 의미한다. 
            // ...prev는 이전의 keyState를 복사한다.
            // [e.key]는 e.key에 해당하는 keyState의 값을 변경한다.
            // true는 e.key에 해당하는 keyState의 값을 true로 변경한다.
            setKeyState(e.key);
        }
        const handleKeyUp = (e) => {
            console.log('handleKeyUp')
            setKeyState(e.key);
        }
        console.log('addEventListener')
        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("keyup", handleKeyUp)

        return () => {
            console.log('removeEventListener')
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
        }
    }, [])

    return (
        <Container>
            <Bg>
                <CodeWrapper>
                    <Theme>html</Theme>
                    <TextBox>
                        <div>&lt;!DOCTYPE html&gt;</div>
                        <Code></Code>
                        <div>&lt;html lang="en"&gt;</div>
                        <Code></Code>
                        <div>&lt;head&gt;</div> 
                        <Code></Code>
                        <div>&lt;meta charset="UTF-8"&gt;</div>
                        <Code></Code>
                        <div>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;</div>
                        <Code></Code>
                        <div>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; </div>
                        <Code></Code>
                        <div>&lt;link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'/&gt;</div>
                        <Code></Code>
                        <div>&lt;!-- CSS --&gt; &lt;link rel="stylesheet" href="../css/default.css"/&gt;</div>
                        <Code></Code>
                        <div>&lt;link rel="stylesheet" href="../css/nav.css"/&gt;</div>
                        <Code></Code>
                        <div>&lt;link rel="stylesheet" href="./css/info.css"/&gt;</div>
                        <Code></Code>
                        <div>&lt;title&gt;HOME&lt;title/&gt;</div>
                        <Code></Code>
                        <div>&lt;/head&gt;</div>
                        <Code></Code>
                        <div>&lt;body&gt;</div>
                        <Code></Code>
                        <div>&lt;nav className="nav container" id="nav-toggle"&gt;</div>
                        <Code></Code>
                        <div>&lt;div className="nav-toggle" id="nav-toggle"&gt;</div>
                        <Code></Code>
                    </TextBox>
                </CodeWrapper>
                <SettingWrapper>
                    <Timer>00:00</Timer>
                    <Progress>
                        <p style={{margin: '0'}}>진행도</p>
                        <BarWrapper>
                            <Bar></Bar>
                            <Text>0%</Text>
                        </BarWrapper>
                    </Progress>
                    <Progress>
                        <p style={{margin: '0'}}>정확도</p>
                        <BarWrapper>
                            <Bar></Bar>
                            <Text>0%</Text>
                        </BarWrapper>
                    </Progress>
                    <Progress>
                        <p style={{margin: '0'}}>현재타수</p>
                        <BarWrapper>
                            <Bar></Bar>
                            <Text>0타</Text>
                        </BarWrapper>
                    </Progress>
                    <Button>다시하기</Button>
                    <Button>저장하기</Button>
                </SettingWrapper>
            </Bg>
                     {/* JSON.stringify(keyState)는 keyState를 문자열로 변환한다. */}
            <div>{keyState}</div>
                <div>
                    <div className="keyboard" id="keyboard">
                        <div className="row">
                        <div className="key" data-code="Backquote" data-val="`" style={{ background : keyState === "~" || keyState === "`"? "#1C3796" : "white", color : keyState === "`" || keyState === "~" ? "white" : "#38405D"}}>
                            <span className="two-value">~</span>
                            <span className="two-value">`</span>
                        </div>
                        <div className="key" data-code="Digit1" data-val="1" style={{ background : keyState === "!" || keyState === "1"? "#1C3796" : "white", color : keyState === "1" || keyState === "!" ? "white" : "#38405D"}}>
                            <span className="two-value">!</span>
                            <span className="two-value">1</span>
                        </div>
                        <div className="key" data-code="Digit2" data-val="2"style={{ background : keyState === "@" || keyState === "2"? "#1C3796" : "white", color : keyState === "@" || keyState === "2" ? "white" : "#38405D"}}>
                            <span className="two-value">@</span>
                            <span className="two-value">2</span>
                        </div>
                        <div className="key" data-code="Digit3" data-val="3" style={{ background : keyState === "#" || keyState === "3"? "#1C3796" : "white", color : keyState === "#" || keyState === "3" ? "white" : "#38405D"}}>
                            <span className="two-value">#</span>
                            <span className="two-value">3</span>
                        </div>
                        <div className="key" data-code="Digit4" data-val="4" style={{ background : keyState === "$" || keyState === "4"? "#1C3796" : "white", color : keyState === "$" || keyState === "4" ? "white" : "#38405D"}}>
                            <span className="two-value">$</span>
                            <span className="two-value">4</span>
                        </div>
                        <div className="key" data-code="Digit5" data-val="5" style={{ background : keyState === "5" || keyState === "%"? "#1C3796" : "white", color : keyState === "%" || keyState === "5" ? "white" : "#38405D"}}>
                            <span className="two-value">%</span>
                            <span className="two-value">5</span>
                        </div>
                        <div className="key" data-code="Digit6" data-val="6"style={{ background : keyState === "^" || keyState === "6"? "#1C3796" : "white", color : keyState === "^" || keyState === "6" ? "white" : "#38405D"}}>
                            <span className="two-value">^</span>
                            <span className="two-value">6</span>
                        </div>
                        <div className="key" data-code="Digit7" data-val="7"style={{ background : keyState === "&" || keyState === "7"? "#1C3796" : "white", color : keyState === "&" || keyState === "7" ? "white" : "#38405D"}}>
                            <span className="two-value">&</span>
                            <span className="two-value">7</span>
                        </div>
                        <div className="key" data-code="Digit8" data-val="8" style={{ background : keyState === "*" || keyState === "8"? "#1C3796" : "white", color : keyState === "*" || keyState === "8" ? "white" : "#38405D"}}>
                            <span className="two-value">*</span>
                            <span className="two-value">8</span>
                        </div>
                        <div className="key" data-code="Digit9" data-val="9" style={{ background : keyState === "(" || keyState === "9"? "#1C3796" : "white", color : keyState === "(" || keyState === "9" ? "white" : "#38405D"}}>
                            <span className="two-value">(</span>
                            <span className="two-value">9</span>
                        </div>
                        <div className="key" data-code="Digit0" data-val="0"style={{ background : keyState === ")" || keyState === "0"? "#1C3796" : "white", color : keyState === ")" || keyState === "0" ? "white" : "#38405D"}}>
                            <span className="two-value">)</span>
                            <span className="two-value">0</span>
                        </div>
                        <div className="key" data-code="Minus" data-val="-" style={{ background : keyState === "_" || keyState === "-"? "#1C3796" : "white", color : keyState === "_" || keyState === "-" ? "white" : "#38405D"}}>
                            <span className="two-value">_</span>
                            <span className="two-value">-</span>
                        </div>
                        <div className="key" data-code="Equal" data-val="="style={{ background : keyState === "+" || keyState === "="? "#1C3796" : "white", color : keyState === "+" || keyState === "=" ? "white" : "#38405D"}}>
                            <span className="two-value">+</span>
                            <span className="two-value">=</span>
                        </div>
                        <div className="key back-space-key" data-code="Backspace" data-val="Backspace" style={{ background : keyState === "Backspace" ? "#1C3796" : "white", color : keyState === "Backspace" ? "white" : "#38405D"}}>
                            Backspace
                        </div>
                    </div>
                    <div className="row">
                        <div className="key tab-key"style={{ background : keyState === "Tab" ? "#1C3796" : "white", color : keyState === "Tab" ? "white" : "#38405D"}}>Tab</div>
                        <div className="key" data-code="KeyQ" data-val="q" style={{ background : keyState === "Q" || keyState === "q"? "#1C3796" : "white", color : keyState === "Q" || keyState === "q" ? "white" : "#38405D"}}>Q</div>
                        <div className="key" data-code="KeyW" data-val="w" style={{ background : keyState === "w" || keyState === "W"? "#1C3796" : "white", color : keyState === "w" || keyState === "W" ? "white" : "#38405D"}}>W</div>
                        <div className="key" data-code="KeyE" data-val="e" style={{ background : keyState === "e" || keyState === "E"? "#1C3796" : "white", color : keyState === "e" || keyState === "E" ? "white" : "#38405D"}}>E</div>
                        <div className="key" data-code="KeyR" data-val="r" style={{ background : keyState === "R" || keyState === "r"? "#1C3796" : "white", color : keyState === "R" || keyState === "r" ? "white" : "#38405D"}}>R</div>
                        <div className="key" data-code="KeyT" data-val="t"style={{ background : keyState === "T" || keyState === "t"? "#1C3796" : "white", color : keyState === "t" || keyState === "T" ? "white" : "#38405D"}}>T</div>
                        <div className="key" data-code="KeyY" data-val="y"style={{ background : keyState === "Y" || keyState === "y"? "#1C3796" : "white", color : keyState === "Y" || keyState === "y" ? "white" : "#38405D"}}>Y</div>
                        <div className="key" data-code="KeyU" data-val="u" style={{ background : keyState === "U" || keyState === "u"? "#1C3796" : "white", color : keyState === "U" || keyState === "u" ? "white" : "#38405D"}}>U</div>
                        <div className="key" data-code="KeyI" data-val="i" style={{ background : keyState === "I" || keyState === "i"? "#1C3796" : "white", color : keyState === "i" || keyState === "I" ? "white" : "#38405D"}}>I</div>
                        <div className="key" data-code="KeyO" data-val="o" style={{ background : keyState === "O" || keyState === "o"? "#1C3796" : "white", color : keyState === "O" || keyState === "o" ? "white" : "#38405D"}}>O</div>
                        <div className="key" data-code="KeyP" data-val="p"style={{ background : keyState === "P" || keyState === "p"? "#1C3796" : "white", color : keyState === "P" || keyState === "p" ? "white" : "#38405D"}}>P</div>
                        <div className="key" data-code="BracketLeft" data-val="[" style={{ background : keyState === "{" || keyState === "["? "#1C3796" : "white", color : keyState === "[" || keyState === "{" ? "white" : "#38405D"}}>
                            <span className="two-value">&#123;</span>
                            <span className="two-value">&#91;</span>
                        </div>
                        <div className="key" data-code="BracketRight" data-val="]" style={{ background : keyState === "]" || keyState === "}"? "#1C3796" : "white", color : keyState === "]" || keyState === "}" ? "white" : "#38405D"}}>
                            <span className="two-value">&#125;</span>
                            <span className="two-value">&#93;</span>
                        </div>
                        <div className="key" data-code="Backslash" data-val="\" style={{ background : keyState === "|"? "#1C3796" : "white", color : keyState === "|" ? "white" : "#38405D"}}>
                            <span className="two-value">|</span>
                            <span className="two-value">\</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="key caps-lock-key"style={{ background : keyState === "CapsLock"? "#1C3796" : "white", color : keyState === "CapsLock"? "white" : "#38405D"}} >CapsLock</div>
                        <div className="key" data-code="KeyA" data-val="a" style={{ background : keyState === "A" || keyState === "a"? "#1C3796" : "white", color : keyState === "A" || keyState === "a" ? "white" : "#38405D"}}>A</div>
                        <div className="key" data-code="KeyS" data-val="s" style={{ background : keyState === "S" || keyState === "s"? "#1C3796" : "white", color : keyState === "S" || keyState === "s" ? "white" : "#38405D"}}>S</div>
                        <div className="key" data-code="KeyD" data-val="d"style={{ background : keyState === "d" || keyState === "D"? "#1C3796" : "white", color : keyState === "d" || keyState === "D" ? "white" : "#38405D"}}>D</div>
                        <div className="key" data-code="KeyF" data-val="f" style={{ background : keyState === "F" || keyState === "f"? "#1C3796" : "white", color : keyState === "F" || keyState === "f" ? "white" : "#38405D"}}>F</div>
                        <div className="key" data-code="KeyG" data-val="g" style={{ background : keyState === "G" || keyState === "g"? "#1C3796" : "white", color : keyState === "G" || keyState === "g" ? "white" : "#38405D"}}>G</div>
                        <div className="key" data-code="KeyH" data-val="h" style={{ background : keyState === "h" || keyState === "H"? "#1C3796" : "white", color : keyState === "h" || keyState === "H" ? "white" : "#38405D"}}>H</div>
                        <div className="key" data-code="KeyJ" data-val="j" style={{ background : keyState === "j" || keyState === "J"? "#1C3796" : "white", color : keyState === "J" || keyState === "j" ? "white" : "#38405D"}}>J</div>
                        <div className="key" data-code="KeyK" data-val="k"style={{ background : keyState === "k" || keyState === "K"? "#1C3796" : "white", color : keyState === "k" || keyState === "K" ? "white" : "#38405D"}}>K</div>
                        <div className="key" data-code="KeyL" data-val="l" style={{ background : keyState === "L" || keyState === "l"? "#1C3796" : "white", color : keyState === "L" || keyState === "l" ? "white" : "#38405D"}}>L</div>
                        <div className="key" data-code="Semicolon" data-val=";" style={{ background : keyState === ";" || keyState === ":"? "#1C3796" : "white", color : keyState === ";" || keyState === ":" ? "white" : "#38405D"}}>
                            <span className="two-value">:</span>
                            <span className="two-value">;</span>
                        </div>
                        <div className="key" data-code="Quote" data-val="'" style={{ background : keyState === '"' || keyState === "'"? "#1C3796" : "white", color : keyState === "'" || keyState === '"' ? "white" : "#38405D"}}>
                            <span className="two-value">"</span>
                            <span className="two-value">'</span>
                        </div>
                        <div className="key enter-key" data-code="Enter" style={{ background : keyState === "Enter" ? "#1C3796" : "white", color : keyState === "Enter"  ? "white" : "#38405D"}}>Enter</div>
                    </div>
                    <div className="row">
                        <div className="key left-shift-key" data-code="ShiftLeft" style={{ background : keyState === "Shift" ? "#1C3796" : "white", color : keyState === "Shift" ? "white" : "#38405D"}}>Shift</div>
                        <div className="key" data-code="KeyZ" data-val="z" style={{ background : keyState === "z" || keyState === "Z"? "#1C3796" : "white", color : keyState === "z" || keyState === "Z" ? "white" : "#38405D"}}>Z</div>
                        <div className="key" data-code="KeyX" data-val="x" style={{ background : keyState === "x" || keyState === "X"? "#1C3796" : "white", color : keyState === "x" || keyState === "X" ? "white" : "#38405D"}}>X</div>
                        <div className="key" data-code="KeyC" data-val="c" style={{ background : keyState === "c" || keyState === "C"? "#1C3796" : "white", color : keyState === "c" || keyState === "C" ? "white" : "#38405D"}}>C</div>
                        <div className="key" data-code="KeyV" data-val="v" style={{ background : keyState === "v" || keyState === "V"? "#1C3796" : "white", color : keyState === "v" || keyState === "V" ? "white" : "#38405D"}}>V</div>
                        <div className="key" data-code="KeyB" data-val="b" style={{ background : keyState === "B" || keyState === "b"? "#1C3796" : "white", color : keyState === "B" || keyState === "b" ? "white" : "#38405D"}}>B</div>
                        <div className="key" data-code="KeyN" data-val="n" style={{ background : keyState === "N" || keyState === "n"? "#1C3796" : "white", color : keyState === "N" || keyState === "n" ? "white" : "#38405D"}}>N</div>
                        <div className="key" data-code="KeyM" data-val="m" style={{ background : keyState === "M" || keyState === "m"? "#1C3796" : "white", color : keyState === "M" || keyState === "m" ? "white" : "#38405D"}}>M</div>
                        <div className="key" data-code="Comma" data-val="," style={{ background : keyState === "<" || keyState === ","? "#1C3796" : "white", color : keyState === "<" || keyState === "," ? "white" : "#38405D"}}>
                            <span className="two-value">
                                &lt;
                            </span>
                            <span className="two-value">,</span>
                        </div>
                        <div className="key" data-code="Period" data-val="." style={{ background : keyState === ">" || keyState === "."? "#1C3796" : "white", color : keyState === "." || keyState === ">" ? "white" : "#38405D"}}>
                            <span className="two-value">
                                &gt;
                            </span>
                            <span className="two-value">.</span>
                        </div>
                        <div className="key" data-code="Slash" data-val="/" style={{ background : keyState === "/" || keyState === "?"? "#1C3796" : "white", color : keyState === "?" || keyState === "/" ? "white" : "#38405D"}}>
                            <span className="two-value">?</span>
                            <span className="two-value">/</span>
                        </div>
                        <div className="key right-shift-key" data-code="ShiftRight" style={{ background : keyState === "Shift" ? "#1C3796" : "white", color : keyState === "Shift" ? "white" : "#38405D"}}>Shift</div>
                    </div>
                    <div className="row">
                        <div className="key" style={{ background : keyState === "Control"  ? "#1C3796" : "white", color : keyState === "Control" ? "white" : "#38405D"}}>Ctrl</div>
                        <div className="key" >fn</div>
                        <div className="key">&nbsp;</div>
                        <div className="key alt-key" style={{ background : keyState === "Alt"? "#1C3796" : "white", color : keyState === "Alt" ? "white" : "#38405D"}}>alt</div>
                        <div className="key space-key" data-code="Space" data-val="Space" style={{ background : keyState === "Space"  ? "#1C3796" : "white", color : keyState === "Spacevxcv" ? "white" : "#38405D"}}>&nbsp;</div>
                        <div className="key hangle-key" style={{ background : keyState === "HangulMode"? "#1C3796" : "white", color : keyState === "HangulMode"? "white" : "#38405D"}}>한/영</div>
                        <div className="key">&nbsp;</div>
                        <div className="arrow">
                            <div className="key grid-item">&nbsp;</div>
                            <div className="key grid-item" style={{ background : keyState === "ArrowUp"? "#1C3796" : "white", color : keyState === "ArrowUp"? "white" : "#38405D"}}>▲</div>
                            <div className="key grid-item">&nbsp;</div>
                            <div className="key grid-item" style={{ background : keyState === "ArrowLeft"? "#1C3796" : "white", color : keyState === "ArrowLeft"? "white" : "#38405D"}}>◀</div>
                            <div className="key grid-item" style={{ background : keyState === "ArrowDown"? "#1C3796" : "white", color : keyState === "ArrowDown"? "white" : "#38405D"}}>▼</div>
                            <div className="key grid-item" style={{ background : keyState === "ArrowRight"? "#1C3796" : "white", color : keyState === "ArrowRight"? "white" : "#38405D"}}>▶</div>
                        </div>
                    </div>
                </div>
            </div>
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
    width: 1054px;
    height: 533px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${bg});
    margin-top: 42px;
`;

const CodeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Theme = styled.div`
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
`;

const TextBox = styled.div`
    margin-top: 50px;
    margin-left: 20px;
    text-align: left;
    overflow-y: scroll; 
    width: 870px;
    height: 430px; 
    color: #98A2B3;
`;

const Code = styled.input`
    width: 853px;
    height: 37px;
    margin-top: 4px;
    margin-bottom: 16px;
    border: 0;
    background-color: #E4E7EC;
    border-radius: 8px;
    padding-left: 10px;
    
    &:focus {
        outline: none;
        background-color: #EAF2FE;
    }
`;
    
const SettingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
`;

const Timer = styled.div`
    margin-bottom: 56px;
    font-weight: bold;
`;

const Progress = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:nth-child(4) {
        margin-bottom: 150px;
    }
`;

const BarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Bar = styled.div`
    width: 70px;
    height: 7px;
    background-color: #E4E7EC;
`;

const Text = styled.p`
    font-size: 12px;
    color: #E4E7EC;  
`;

const Button = styled.button`
    width: 94px;
    height: 29px;
    margin-top: 8px;
    border-radius: 4px;
    border: 0;
    background-color: #667085;
    font-size: 14px;
    color: #FFFFFF;
`

export default Typing