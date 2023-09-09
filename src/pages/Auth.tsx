import styled from "styled-components";
import AuthHeader from "../components/organisms/AuthHeader/AuthHeader";

const AuthPage = () => {
  return (
    <Container>
      {/* 헤더(로고) */}
      <AuthHeader />
      {/* 로그인 폼 */}
      {/* 비밀번호 찾기 | 회원가입 */}
      {/* 소셜 로그인 */}
    </Container>
  );
};

export default AuthPage;

const Container = styled.main``;
