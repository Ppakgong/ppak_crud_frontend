import styled from "styled-components";
import Header from "../components/organisms/Header/Header";
import Main from "../components/organisms/Main/Main";
import MenuContainer from "../components/organisms/Menu/MenuContainer";

const IndexPage = () => {
  return (
    <Container>
      <Header />
      <MenuContainer />
      <Main />
    </Container>
  );
};

export default IndexPage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;
