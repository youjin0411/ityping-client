import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginUser } from '../_actions/user_login';

function Login() {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onSubmitHandler = (event) => {
        // 버튼만 누르면 리로드 되는것을 막아줌
        event.preventDefault();

        console.log('Email', Email);
        console.log('Password', Password);
        
        let body = {
            email: Email,
            password: Password,
        }

        dispatch(loginUser(body));
    }

    return (
        <Container>
            <Welcome>Welcome!</Welcome>
            <Text style={{marginBottom: '30px'}}>login to TITLE</Text>
            <Form onSubmit={onSubmitHandler}>
                <label>Email</label>
                <InputEmail type='email' value={Email} onChange={onEmailHandler} placeholder='Email을 입력해주세요'/>
                <label>Password</label>
                <InputPw type='password' value={Password} onChange={onPasswordHandler} placeholder='Password를 입력해주세요'/>
                <LoginBtn formAction=''>Login</LoginBtn>
            </Form>
            <Or>OR</Or>
            <Button>Sign in with Google</Button>
        </Container>
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

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
    margin-left: 6px;
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