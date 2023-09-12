import styled from "styled-components";
import { AuthRole } from "./AuthFormContainer";
import theme from "../../../styles/theme";
import Button, { ButtonStyleProps } from "../../atoms/Button/Button";
import { useCallback, useMemo } from "react";
import SignInContainer from "../SignIn/SignInContainer";
import SignUpContainer from "../SignUp/SignUpContainer";
import Text, { TextStyleProps } from "../../atoms/Text/Text";

export type AuthFormProps = {
  currentAuthRole: AuthRole;
  onChangeAuthRole: ({ authRole }: { authRole: AuthRole }) => void;
};

const AuthForm = ({ currentAuthRole, onChangeAuthRole }: AuthFormProps) => {
  const buttonStyleProps = useCallback(
    ({ authRole }: { authRole: AuthRole }): ButtonStyleProps => {
      return {
        $border_radius: 0,
        $color: authRole === currentAuthRole ? "black" : "gray4",
        $bg_color: authRole === currentAuthRole ? "white" : "gray5",
        $typo: "regular4",
        $py: 30,
      };
    },
    [currentAuthRole]
  );

  const forgotStyleProps: TextStyleProps = useMemo(
    () => ({
      $color: "white",
      $typo: "regular4",
      $isUnderline: true,
      $isPointer: true,
    }),
    []
  );
  return (
    <Container>
      <Wrapper>
        <AuthRoleWrapper>
          <Button
            label="Sign in"
            onClick={() => onChangeAuthRole({ authRole: AuthRole.SIGN_IN })}
            {...buttonStyleProps({ authRole: AuthRole.SIGN_IN })}
          />
          <Button
            label="New account"
            onClick={() => onChangeAuthRole({ authRole: AuthRole.SIGN_UP })}
            {...buttonStyleProps({ authRole: AuthRole.SIGN_UP })}
          />
        </AuthRoleWrapper>
        <AuthRoleFormWrapper>
          {currentAuthRole === AuthRole.SIGN_IN ? (
            <SignInContainer />
          ) : (
            <SignUpContainer />
          )}
        </AuthRoleFormWrapper>
      </Wrapper>
      {currentAuthRole === AuthRole.SIGN_IN && (
        <FindWrapper>
          <Text label="Forgot your id?" {...forgotStyleProps} />
          <Text label="Forgot your password?" {...forgotStyleProps} />
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

const AuthRoleWrapper = styled.div`
  display: flex;
`;

const AuthRoleFormWrapper = styled.div`
  padding: 40px;
`;

const FindWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
