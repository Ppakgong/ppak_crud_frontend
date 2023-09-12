import styled from "styled-components";
import theme from "../styles/theme";
import AuthFormContainer from "../components/organisms/AuthForm/AuthFormContainer";
import Text from "../components/atoms/Text/Text";

/**
 *
 * @returns Auth페이지에 나올 헤더
 */
const AuthPage = () => {
  return (
    <Container>
      <Logo>
        <Text
          label="MS Community"
          $typo="bold1"
          $color="black"
          $gradient={{ startColor: "purple1", endColor: "red1" }}
        />
      </Logo>
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
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const Logo = styled.div``;
