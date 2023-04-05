import React from 'react';
import styled from 'styled-components';

const SignUp = () => {
    return (
        <Container>
            <Welcome>Welcome!</Welcome>
            <Text>Sign Up to ITyping</Text>
            <Form>
                <Label>Email</Label>
                <InputEmail type='email' placeholder='Email을 입력해주세요'/>
                <Label>Password</Label>
                <InputPw type='password' placeholder='Password를 입력해주세요'/>
                <Label>닉네임</Label>
                <InputName type='text' maxLength='6' placeholder='닉네임을 입력해주세요(최대 6글자)'/>
                <SignUpBtn formAction=''>Sign Up</SignUpBtn>
            </Form>
            <Or>OR</Or>
            <Button>Sign Up with Google</Button>
        </Container>
    )
}

const Container = styled.div`
    margin: 146px auto;
    width: 445px;
    height: 682px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #667085;
    border-radius: 10px;
`;

const Welcome = styled.h1`
    color: #1C3796;
    font-size: 25px;
    margin: 0;
    margin-top: 40px;
`;

const Text = styled.p`
    font-size: 16px;
    margin: 17px 0;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Label = styled.label`
    color: #38405D;  

    &:nth-child(1) {
        margin-top: 38px;
    }

    &:nth-child(3), &:nth-child(5) {
        margin-top: 16px;
    }
`;

const InputEmail = styled.input`
    width: 236px;
    height: 42px;
    margin-top: 8px;
    border: 1px solid #667085;
    border-radius: 8px;
    padding-left: 10px;
    outline: 0;
`;

const InputPw = styled.input`
    width: 236px;
    height: 42px;
    margin-top: 8px;
    border: 1px solid #667085;
    border-radius: 8px;
    padding-left: 10px;
    outline: 0;
`;

const InputName = styled.input`
    width: 236px;
    height: 42px;
    margin-top: 8px;
    border: 1px solid #667085;
    border-radius: 8px;
    padding-left: 10px;
    outline: 0;
`;

const SignUpBtn = styled.button`
    width: 250px;
    height: 38px;
    margin-top: 18px;
    color: white;
    border: 1px solid #667085;
    background-color: #1C3796;
    border-radius: 8px;
    font-size: 16px;
`;

const Or = styled.div`
    display: flex;
    align-items: center;
    color: #38405D;
    font-size: 12px;
    margin-top: 34px;
    margin-bottom: 22px;

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
    height: 42px;
    background-color: #ffffff;
    color: #757575;
    border: 1px solid #667085;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
`;
export default SignUp;