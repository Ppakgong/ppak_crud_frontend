import styled from "styled-components";
import AuthHeader from "../components/organisms/AuthHeader/AuthHeader";
import AuthFormContainer from "../components/organisms/AuthForm/AuthFormContainer";
import theme from "../styles/theme";

/**
 *
 * @returns Auth페이지에 나올 헤더
 */
const AuthPage = () => {
  return (
    <Container>
      <AuthHeaderWrapper>
        <AuthHeader />
      </AuthHeaderWrapper>
      <AuthFormContainer />
    </Container>
  );
};

export default AuthPage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.color.blue_dark};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 100px 0;
`;

const AuthHeaderWrapper = styled.div`
  margin-bottom: 48px;
`;
