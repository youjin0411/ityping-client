import React from 'react';
import styled from 'styled-components';

function Login(props) {
    return (
        <>
            <Container>
                <Welcome>Welcome!</Welcome>
                <Text style={{marginBottom: '30px'}}>login to TITLE</Text>
                <Wrapper>
                    <Text>Email or 닉네임</Text>
                    <InputEmail type='text' placeholder='Email or 닉네임을 입력해주세요'></InputEmail>
                </Wrapper>
                <Wrapper>
                    <Text>Password</Text>
                    <InputPw type='password' placeholder='Password를 입력해주세요'></InputPw>
                </Wrapper>
                <LoginBtn>Login</LoginBtn>
                <Or>OR</Or>
                <Button>Sign in with Google</Button>
            </Container>
        </>
    )
}

const Container = styled.div`
    margin: 130px auto;
    width: 445px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #667085;
    border-radius: 10px;
`;

const Welcome = styled.h1`
    color: #1C3796;
    font-size: 25px;
`;

const Text = styled.p`
    font-size: 16px;
    margin: 8px 0;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const InputEmail = styled.input`
    width: 250px;
    height: 40px;
    margin-bottom: 8px;
    border: 1px solid #667085;
    border-radius: 8px;
    padding-left: 10px;
    outline: 0;
`;

const InputPw = styled.input`
    width: 250px;
    height: 40px;
    margin-bottom: 15px;
    border: 1px solid #667085;
    border-radius: 8px;
    padding-left: 10px;
    outline: 0;
`;

const LoginBtn = styled.button`
    width: 250px;
    height: 40px;
    color: white;
    border: 1px solid #667085;
    background-color: #7986B6;
    border-radius: 8px;
    font-size: 16px;
`;

const Or = styled.div`
    display: flex;
    align-items: center;
    color: #38405D;
    font-size: 12px;
    margin-top: 30px;
    margin-bottom: 20px;

    &::before {
        content: "";
        width: 99px;
        margin: 0 16px;
        background: #38405D;
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 16px;
    }

    &::after {
        content: "";
        width: 99px;
        margin: 0 16px;
        background: #38405D;
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 16px;
    }
`;

const Button = styled.button`
    width: 250px;
    height: 40px;
    color: #757575;
    border: 1px solid #667085;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
`;
export default Login;