import styled from "styled-components";
import theme from "../styles/theme";
import AuthLogo from "../components/organisms/Auth/AuthLogo/AuthLogo";
import AuthFormContainer from "../components/organisms/Auth/AuthForm/AuthFormContainer";

/**
 *
 * @returns Auth페이지에 나올 헤더
 */
const AuthPage = () => {
  return (
    <Container>
      <AuthLogo />
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
  gap: 48px;
`;
