import React from 'react';
import styled from 'styled-components';
import image from '../../img/circle.png';
import "./TypingStyle.css";
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
                <div style={{textAlign: 'left', marginLeft: '3vw', marginTop: '0.7vw', overflowY:'scroll', width:'82.7rem',height: '40.5rem', fontSize :'2rem'}}>
                    &lt;!DOCTYPE html&gt; <br />
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
            <div class="keyboard" id="keyboard">
                <div class="row">
                    <div class="key s" data-code="Spec1" data-val="esc">esc</div>
                    <div class="key s" data-code="Spec1" data-val="F1">c</div>
                    <div class="key s" data-code="Spec1" data-val="F2">F2</div>
                    <div class="key s" data-code="Spec1" data-val="F3">F3</div>
                    <div class="key s" data-code="Spec1" data-val="F4">F4</div>
                    <div class="key s" data-code="Spec1" data-val="F5">F5</div>
                    <div class="key s" data-code="Spec1" data-val="F6">F6</div>
                    <div class="key s" data-code="Spec1" data-val="F7">F7</div>
                    <div class="key s" data-code="Spec1" data-val="F8">F8</div>
                    <div class="key s" data-code="Spec1" data-val="F9">F9</div>
                    <div class="key s" data-code="Spec1" data-val="F10">F10</div>
                    <div class="key s" data-code="Spec1" data-val="F11">F11</div>
                    <div class="key s" data-code="Spec1" data-val="F12">F12</div>
                    <div class="key s" data-code="Spec1" data-val="del">del</div>
                </div>
                            <div class="row">
                <div class="key" data-code="Backquote" data-val="`">
                    <span class="two-value">~</span>
                    <span class="two-value">`</span>
                </div>
                <div class="key" data-code="Digit1" data-val="1">
                    <span class="two-value">!</span>
                    <span class="two-value">1</span>
                </div>
                <div class="key" data-code="Digit2" data-val="2">
                    <span class="two-value">@</span>
                    <span class="two-value">2</span>
                </div>
                <div class="key" data-code="Digit3" data-val="3">
                    <span class="two-value">#</span>
                    <span class="two-value">3</span>
                </div>
                <div class="key" data-code="Digit4" data-val="4">
                    <span class="two-value">$</span>
                    <span class="two-value">4</span>
                </div>
                <div class="key" data-code="Digit5" data-val="5">
                    <span class="two-value">%</span>
                    <span class="two-value">5</span>
                </div>
                <div class="key" data-code="Digit6" data-val="6">
                    <span class="two-value">^</span>
                    <span class="two-value">6</span>
                </div>
                <div class="key" data-code="Digit7" data-val="7">
                    <span class="two-value">&</span>
                    <span class="two-value">7</span>
                </div>
                <div class="key" data-code="Digit8" data-val="8">
                    <span class="two-value">*</span>
                    <span class="two-value">8</span>
                </div>
                <div class="key" data-code="Digit9" data-val="9">
                    <span class="two-value">(</span>
                    <span class="two-value">9</span>
                </div>
                <div class="key" data-code="Digit0" data-val="0">
                    <span class="two-value">)</span>
                    <span class="two-value">0</span>
                </div>
                <div class="key" data-code="Minus" data-val="-">
                    <span class="two-value">_</span>
                    <span class="two-value">-</span>
                </div>
                <div class="key" data-code="Equal" data-val="=">
                    <span class="two-value">+</span>
                    <span class="two-value">=</span>
                </div>
                <div class="key back-space-key" data-code="Backspace" data-val="Backspace">
                    Backspace
                </div>
            </div>
            <div class="row">
                <div class="key tab-key">Tab</div>
                <div class="key" data-code="KeyQ" data-val="q">Q</div>
                <div class="key" data-code="KeyW" data-val="w">W</div>
                <div class="key" data-code="KeyE" data-val="e">E</div>
                <div class="key" data-code="KeyR" data-val="r">R</div>
                <div class="key" data-code="KeyT" data-val="t">T</div>
                <div class="key" data-code="KeyY" data-val="y">Y</div>
                <div class="key" data-code="KeyU" data-val="u">U</div>
                <div class="key" data-code="KeyI" data-val="i">I</div>
                <div class="key" data-code="KeyO" data-val="o">O</div>
                <div class="key" data-code="KeyP" data-val="p">P</div>
                <div class="key" data-code="BracketLeft" data-val="[">
                    <span class="two-value">&#123;</span>
                    <span class="two-value">&#91;</span>
                </div>
                <div class="key" data-code="BracketRight" data-val="]">
                    <span class="two-value">&#125;</span>
                    <span class="two-value">&#93;</span>
                </div>
                <div class="key back-slash-key" data-code="Backslash" data-val="\">
                    <span class="two-value">|</span>
                    <span class="two-value">\</span>
                </div>
            </div>
            <div class="row">
                <div class="key caps-lock-key">CapsLock</div>
                <div class="key" data-code="KeyA" data-val="a">A</div>
                <div class="key" data-code="KeyS" data-val="s">S</div>
                <div class="key" data-code="KeyD" data-val="d">D</div>
                <div class="key" data-code="KeyF" data-val="f">F</div>
                <div class="key" data-code="KeyG" data-val="g">G</div>
                <div class="key" data-code="KeyH" data-val="h">H</div>
                <div class="key" data-code="KeyJ" data-val="j">J</div>
                <div class="key" data-code="KeyK" data-val="k">K</div>
                <div class="key" data-code="KeyL" data-val="l">L</div>
                <div class="key" data-code="Semicolon" data-val=";">
                    <span class="two-value">:</span>
                    <span class="two-value">;</span>
                </div>
                <div class="key" data-code="Quote" data-val="'">
                    <span class="two-value">"</span>
                    <span class="two-value">'</span>
                </div>
                <div class="key enter-key" data-code="Enter">Enter</div>
            </div>
            <div class="row">
                <div class="key left-shift-key" data-code="ShiftLeft">Shift</div>
                <div class="key" data-code="KeyZ" data-val="z">Z</div>
                <div class="key" data-code="KeyX" data-val="x">X</div>
                <div class="key" data-code="KeyC" data-val="c">C</div>
                <div class="key" data-code="KeyV" data-val="v">V</div>
                <div class="key" data-code="KeyB" data-val="b">B</div>
                <div class="key" data-code="KeyN" data-val="n">N</div>
                <div class="key" data-code="KeyM" data-val="m">M</div>
                <div class="key" data-code="Comma" data-val=",">
                    <span class="two-value">
                        &lt;
                    </span>
                    <span class="two-value">,</span>
                </div>
                <div class="key" data-code="Period" data-val=".">
                    <span class="two-value">
                        &gt;
                    </span>
                    <span class="two-value">.</span>
                </div>
                <div class="key" data-code="Slash" data-val="/">
                    <span class="two-value">?</span>
                    <span class="two-value">/</span>
                </div>
                <div class="key right-shift-key" data-code="ShiftRight">Shift</div>
            </div>
            <div class="row">
                <div class="key">Ctrl</div>
                <div class="key">fn</div>
                <div class="key">&nbsp;</div>
                <div class="key">alt</div>
                <div class="key space-key" data-code="Space" data-val="Space">&nbsp;</div>
                <div class="key fn-key">한/영</div>
                <div class="key fn-key">&nbsp;</div>
                <div class="arrow">
                    <div class="key grid-item">&nbsp;</div>
                    <div class="key grid-item">▲</div>
                    <div class="key grid-item">&nbsp;</div>
                    <div class="key grid-item">◀</div>
                    <div class="key grid-item">▼</div>
                    <div class="key grid-item">▶</div>
                </div>
            </div>
        </div>
    </div>
    )
}
class Keyboard {
  #swichEl;
  #fontSelectEl;
  #containerEl;
  #keyboardEl;
  #inputGroupEl;
  #inputEl;
  #keyPress = false;
  #mouseDown = false;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }
  #assignElement() {
    this.#containerEl = document.getElementById("container");
    this.#swichEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
    this.#keyboardEl = this.#containerEl.querySelector("#keyboard");
    this.#inputGroupEl = this.#containerEl.querySelector("#input-group");
    this.#inputEl = this.#inputGroupEl.querySelector("#input");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", this.#onChageTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChageFont);
    document.addEventListener("keydown", this.#onKeyDown.bind(this));
    document.addEventListener("keyup", this.#onKeyUp.bind(this));
    this.#inputEl.addEventListener("input", this.#onInput);
    this.#keyboardEl.addEventListener(
      "mousedown",
      this.#onMouseDown.bind(this)
    );
    document.addEventListener("mouseup", this.#onMouseUp.bind(this));
  }

  #onMouseUp(event) {
    if (this.#keyPress) return;
    this.#mouseDown = true;
    const keyEl = event.target.closest("div.key");
    const isActive = !!keyEl?.classList.contains("active");
    const val = keyEl?.dataset.val;

    if (isActive && !!val && val !== "Space" && val !== "Backspace") {
      this.#inputEl.value += val;
    }
    if (isActive && val === "Space") {
      this.#inputEl.value += " ";
    }
    if (isActive && val === "Backspace") {
      this.#inputEl.value = this.#inputEl.value.slice(0, -1);
    }

    this.#keyboardEl.querySelector(".active")?.classList.remove("active");
  }
  #onMouseDown(event) {
    if (this.#keyPress) return;
    this.#mouseDown = true;
    event.target.closest("div.key")?.classList.add("active");
  }
  #onInput(event) {
    event.target.value = event.target.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, "");
  }
  #onKeyDown(event) {
    if (this.#mouseDown) return;
    this.#keyPress = true;
    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.add("active");
    this.#inputGroupEl.classList.toggle(
      "error",
      /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key)
    );
  }
  #onKeyUp(event) {
    if (this.#mouseDown) return;
    this.#keyPress = false;
    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.remove("active");
  }

  #onChageTheme(event) {
    document.documentElement.setAttribute(
      "theme",
      event.target.checked ? "dark-mode" : ""
    );
  }

  #onChageFont(event) {
    document.body.style.fontFamily = event.target.value;
  }
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
    width: 66.9444vw;
    height: 70.75vh;
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
    width: 57.95vw;
    margin-top: 1.2vw;
    background: #667085;`;
const Heightline = styled.hr`
    width: 0.01vw;
    height: 70.45vh;
    margin: 0 auto;
    margin-left: 58.1vw;
    margin-top: -32.8vw;

`;
export default Typing