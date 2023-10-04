import styled from "styled-components";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import TextArea from "../../atoms/TextArea/Textarea";

const Post = () => {
  return (
    <Container>
      <Input placeholder="제목" name="title" />
      <ContentWrapper>
        <TextArea placeholder="내용" name="content" />
      </ContentWrapper>
      <ButtonWrapper>
        <Button label="글쓰기" $typo="bold5" $width={12} />
      </ButtonWrapper>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContentWrapper = styled.div`
  height: 400px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
