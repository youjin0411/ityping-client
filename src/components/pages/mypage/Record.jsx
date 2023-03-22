import React from 'react';
import styled from 'styled-components';

const Record = () => {

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
                            <Link href="/mypage/profile">프로필</Link>
                            <Link href="/mypage/record">기록보기</Link>
                            <Link href="/mypage/save">저장</Link>
                        </MenuItemContainer>
                        <div></div><div></div><div></div><div></div><div></div>
                        <Logout>logout</Logout>
                    </LeftMenu>
                    <hr style={{border:'1px solid #667085', width:'1', height: '660px', marginLeft:'20px', marginRight:'30px'}}/>
                    <RecordMenu>
                        <BasicWrapper>
                            <ContentWrapper>
                                <p style={{fontSize:'16px', color:'#38405D', float: 'left'}}>기초</p>
                                <ContentsContainer>
                                    <ContentContainer>
                                        <Image></Image>
                                        <p>html</p>
                                    </ContentContainer>
                                    <ContentContainer>
                                        <Image></Image>
                                        <p>css</p>
                                    </ContentContainer>
                                    <ContentContainer>
                                        <Image></Image>
                                        <p>css</p>
                                    </ContentContainer>
                                    <ContentContainer>
                                        <Image></Image>
                                        <p>html</p>
                                    </ContentContainer>
                                </ContentsContainer>
                            </ContentWrapper>
                        </BasicWrapper>
                        <PracticeWrapper>
                            <ContentWrapper>
                                <p style={{fontSize:'16px', color:'#38405D'}}>실전</p>
                                <ContentsContainer>
                                    <ContentContainer>
                                        <Image></Image>
                                        <p>쇼핑몰</p>
                                    </ContentContainer>
                                </ContentsContainer>
                            </ContentWrapper>
                        </PracticeWrapper>
                    </RecordMenu>
                </MenuContainer>
            </Container>
        </Wrapper>
    );
};

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

const Link = styled.a`
    width: 280px;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #667085;
    background-color: white;
    color: #38405D;
    font-weight: bold;
    text-align: left;
    padding-left: 13px;
    text-decoration: none;
    color:#38405D;
    font-size: 16px;
    
    &:nth-child(2) {
        box-shadow: 0 0 0 2px #1C3796 inset;
        color: #1C3796;
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

const RecordMenu = styled.div`
    height: 820px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
`;

const BasicWrapper = styled.div`
    width: 860px;
    height: 495px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #667085;
    border-radius: 10px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContentsContainer = styled.div`
    width: 800px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 40px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Image = styled.div`
    width: 240px;
    height: 150px;
    border-radius: 10px;
    background-color: #E4E7EC;
`;

const PracticeWrapper = styled.div`
    width: 860px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #667085;
    border-radius: 10px;
`;

export default Record;