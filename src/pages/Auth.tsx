import styled from "styled-components";
import AuthHeader from "../components/organisms/AuthHeader/AuthHeader";
import AuthLoginFormContainer from "../components/organisms/AuthLoginForm/AuthLoginFormContainer";

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
      <AuthLoginFormContainer />
    </Container>
  );
};

export default AuthPage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthHeaderWrapper = styled.div`
  margin: 108px 0 48px;
`;
