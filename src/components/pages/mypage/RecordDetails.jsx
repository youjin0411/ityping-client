import styled from "styled-components";

const RecordDetails = () => {
    return (
        <Container>
            <Icon></Icon>
            <Info>평균타수  168</Info>
            <Info>정확도    99%</Info>
            <Info>연습시간  2분 12초</Info>
            <Wrapper>
                <Button>다시하기</Button>
                <hr style={{border:'1px solid #ffffff', width:'1', height: '24px', marginTop: '5px'}}/>
                <Button>코드리뷰</Button>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    height: 150px;
    border-radius: 5px;
    box-shadow: 0 0 0 2px #7986B6 inset;
`;

const Icon = styled.button`
    width: 20px;
    height: 20px;
    margin-top: 10px;
    margin-right: 8px;
    color: #C55545;
    align-self: flex-end;
`;

const Info = styled.div`
    font-size: 13px;
    color: #667085;
    font-weight: bold;  
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #7986B6;
    width: 237px;
    height: 35px;  
`;

const Button = styled.button`
    width: 118px;
    height: 32px;
    border: 0;
    background-color: #7986B6;
    color: white;
`

export default RecordDetails;