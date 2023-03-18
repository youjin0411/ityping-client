import React from 'react';
import styled from 'styled-components';

function MyPage(props) {

    const { userName } = props;

    return (
        <Wrapper>
            <Container>
                <Title>MY PAGE</Title>
                <MenuContainer>
                    <LeftMenu>
                        <Message>
                            <div style={{fontSize:'18px', color:'#FF9F42'}}>
                                최혜민님,
                            </div>
                            <div style={{fontSize: '18px', color: 'white'}}>
                                안녕하세요!
                            </div>
                        </Message>
                        <MenuItemContainer>
                            <MenuItem>프로필</MenuItem>
                            <MenuItem>기록보기</MenuItem>
                            <MenuItem>저장</MenuItem>
                        </MenuItemContainer>
                        <div></div><div></div><div></div><div></div><div></div>
                        <Logout>logout</Logout>
                    </LeftMenu>
                    <hr style={{border:'1px solid #667085', width:'1', height: '660px', marginLeft:'20px', marginRight:'30px'}}/>
                    <ProfileMenu>
                        <HeaderWrapper>
                            <p style={{fontSize:'16px', color:'#38405D'}}>기본정보</p>
                            <Edit>0</Edit>
                        </HeaderWrapper>
                        <InfoWrapper>
                            <Box>
                                <Info>이름</Info>
                                <UserInfo>최혜민</UserInfo>
                            </Box>
                            <Box>
                                <Info>닉네임</Info>
                                <UserInfo>Hyem</UserInfo>
                            </Box>
                            <Box>
                                <Info>이메일</Info>
                                <UserInfo>w2112@e-mirim.hs.kr</UserInfo>
                            </Box>
                        </InfoWrapper>
                    </ProfileMenu>
                </MenuContainer>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-left: 370px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 60px;
`;

const Title = styled.h2`
    font-size: 18px;
    color: #38405D;
`;

const MenuContainer = styled.div`
    height: 660px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const LeftMenu = styled.div`
    height: 660px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ProfileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 380px;
    height: 300px;
    border-radius: 10px;
    border: 1px solid #667085;
`;

const Message = styled.div`
    width : 260px;
    height: 100px;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 20px;
    background-color: #1C3796;
    border-radius: 10px;
`;

const MenuItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 8px;
`;

const MenuItem = styled.button`
    width: 280px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #667085;
    background-color: white;
    color: #38405D;
    font-weight: bold;
    text-align: left;
    padding-left: 13px;
    cursor: pointer;

    &:hover {
        border: 2px solid #1C3796;
        color: #1c3796;
    }
`;

const Logout = styled.button`
    width: 280px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #667085;
    background-color: white;
    color: #C55545;
    font-weight: bold;
    text-align: left;
    padding-left: 13px;
    cursor: pointer;

    &:hover {
        border: 2px solid #C55545;
    }
`;

const HeaderWrapper = styled.div`
    width: 316px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -40px;
`;

const Edit = styled.button`

`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
`;

const Box = styled.div`
    width: 315px;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #E4E7EC;
    border-radius: 8px;
`;

const Info = styled.p`
    font-size: 16px;
    color: #667085;
    padding-left: 20px;
`;

const UserInfo = styled.p`
    font-size: 16px;
    color: #38405D;
    padding-right: 20px;
`;

export default MyPage;