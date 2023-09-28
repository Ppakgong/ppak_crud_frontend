import styled from "styled-components";
import Text from "../../atoms/Text/Text";
import MainList from "../MainList/MainList";
import theme from "../../../styles/theme";
import Button from "../../atoms/Button/Button";

const Main = () => {
  return (
    <Container>
      <Title>
        <Text label="자유게시판" $typo="bold2" />
      </Title>
      <Contents>
        <MainList />
      </Contents>
      <ButtonWrapper>
        <Button label="글쓰기" $typo="bold5" $width={8} />
      </ButtonWrapper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const Title = styled.span`
  padding: 30px 0;
  border-bottom: 1px solid ${theme.color.black};
`;

const Contents = styled.div``;

const ButtonWrapper = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
