import React from 'react';
import styled from 'styled-components';

function CodeReview(props) {

    return (
        <div>
            <Wrapper>
                <Divtheme> 기초 &gt;  HTML &gt;  코드 리뷰 </Divtheme>
                <Widthline/>
                <header>
				<hgroup>
					<p class="title"><a href="https://opentutorials.org/course/1">생활코딩</a></p>
					<p class="subtitle"><small>Coding Everybody</small></p>
				</hgroup>

				<ul id="left_nav">
					<li id="to_home"><a class="title" href="https://opentutorials.org/"><span>Open</span>tutorials.org</a></li> 
					<li id="course_allview">
						<a href="#" class="title">코스 전체목록</a>
					</li>
				</ul>			<nav id="right_nav">
				<ul>

					
					<li><a class="title" href="https://opentutorials.org/module/180">도움말</a></li>
					<li id="login">
						<a class="title" href="https://opentutorials.org/auth?mode=login&amp;returnURL=course/3085">로그인</a>
						<form id="login-static" class="submenu layerbox" autocomplete="off">
							<div class="wrapper table">
								<div class="header">
									<strong>로그인</strong>
									<button class="btn_close">닫기</button>
								</div>
								<div class="body">
									<dl>
										<dt><label for="predialog_email">아이디</label></dt>
										<dd><input type="text" id="predialog_email" class="text" name="email"/></dd>
										<dt><label for="prodialog_password">비밀번호</label></dt>
										<dd><input type="password" id="predialog_password" class="text" name="password"/></dd>
									</dl>

									<p><input type="checkbox" id="rememberme" name="rememberme" value="on"/><label for="rememberme">로그인 유지</label></p>

									<div class="btns">
										<button type="submit" class="btn btn_submit">로그인</button>
									</div>
								</div>
								<div class="footer">
									<a href="https://opentutorials.org/auth?mode=forget&amp;returnURL=https%3A%2F%2Fopentutorials.org%2Fcourse%2F3085" target="_blank">비밀번호 찾기</a> |
									<a href="https://opentutorials.org/auth?mode=register&amp;returnURL=https%3A%2F%2Fopentutorials.org%2Fcourse%2F3085">회원가입</a>
								</div>
							</div>
						</form>
					</li>
					<li id="donations"><a href="https://opentutorials.org/module/1588/12591">후원</a></li>
					
					
				</ul>
			</nav>
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
    margin-top: 6.925vh;`
    ;
const Divtheme = styled.div`
    font-size: 1.2vw;
    font-family: 'Noto Sans KR', sans-serif;
    float: left;
    padding-top: 0.7vw;
    margin-left: 1vw;`;
const Widthline = styled.hr`
    position: absolute;
    width: 83.8vw;
    background: #667085;
    margin-top: 3.2vw;`;

export default CodeReview;