import styled from "styled-components";
import theme from "../../../../styles/theme";
import Button, { ButtonStyleProps } from "../../../atoms/Button/Button";
import AuthForgot from "../AuthForgot/AuthForgot";
import SignInContainer from "../SignIn/SignInContainer";
import { AuthRoleButton } from "./AuthFormContainer";
import SignUpContainer from "../SignUp/SignUpContainer";

export type AuthFormProps = {
  role: AuthRoleButton;
  onChangeRole: ({ role }: { role: AuthRoleButton }) => void;
};

const AuthForm = ({ role, onChangeRole }: AuthFormProps) => {
  const buttonStyleProps = ({
    role,
    targetRole,
  }: {
    role: AuthRoleButton;
    targetRole: AuthRoleButton;
  }): ButtonStyleProps => {
    return {
      $bg_color: role === targetRole ? "white" : "gray6",
      $color: "black",
      $py: 24,
      $typo: "bold4",
      $border_radius: 0,
    };
  };
  return (
    <Container>
      <Wrapper>
        <AuthRoleButtonWrapper>
          <Button
            label="Sign In"
            onClick={() => onChangeRole({ role: "SignIn" })}
            {...buttonStyleProps({ role, targetRole: "SignIn" })}
          />
          <Button
            label="New Account"
            onClick={() => onChangeRole({ role: "SignUP" })}
            {...buttonStyleProps({ role, targetRole: "SignUP" })}
          />
        </AuthRoleButtonWrapper>
        <AuthRoleFormWrapper>
          {role === "SignIn" ? <SignInContainer /> : <SignUpContainer />}
        </AuthRoleFormWrapper>
      </Wrapper>
      {role === "SignIn" && (
        <FindWrapper>
          <AuthForgot />
        </FindWrapper>
      )}
    </Container>
  );
};

export default AuthForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 700px;
`;

const Wrapper = styled.div`
  border: none;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${theme.color.white};
`;

const AuthRoleButtonWrapper = styled.div`
  display: flex;
`;

const AuthRoleFormWrapper = styled.div`
  padding: 40px;
`;

const FindWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
