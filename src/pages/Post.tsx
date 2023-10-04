import styled from "styled-components";
import Post from "../components/organisms/Post/Post";

const PostPage = () => {
  return (
    <Container>
      <Post />
    </Container>
  );
};

export default PostPage;

const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 100px 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
