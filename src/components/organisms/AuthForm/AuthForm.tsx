import styled from "styled-components";
import Text, { TextStyleProps } from "../../atoms/Text/Text";
import Button, { ButtonStyleProps } from "../../atoms/Button/Button";
import { AuthButtonRole } from "./AuthFormContainer";
import theme from "../../../styles/theme";
import Input, { InputStyleProps } from "../../atoms/Input/Input";
import { ChangeEvent, FormEvent } from "react";
import Icon from "../../atoms/Icon/Icon";
import Icons from "../../../utils/icons";

export type AuthFormProps = {
  currRole: AuthButtonRole;
  onChangeRole: ({ role }: { role: AuthButtonRole }) => void;
  inputs: {
    id: string;
    name: string;
    mail: string;
    password: string;
    confirmPassword: string;
  };
  onChange: ({ e }: { e: ChangeEvent<HTMLInputElement> }) => void;
  isHide: boolean;
  onHideToggle: () => void;
  onSignIn: (e: FormEvent) => void;
  onSignUp: (e: FormEvent) => void;
};

const AuthForm = ({
  currRole,
  onChangeRole,
  inputs,
  onChange,
  isHide,
  onHideToggle,
  onSignIn,
  onSignUp,
}: AuthFormProps) => {
  const roleButtonStyleProps = ({
    role,
  }: {
    role: AuthButtonRole;
  }): ButtonStyleProps => {
    return {
      $border_radius: 0,
      $color: role === currRole ? "black" : "gray4",
      $bg_color: role === currRole ? "white" : "gray5",
      $typo: "regular4",
      $py: 30,
    };
  };

  const inputStyleProps: InputStyleProps = {
    $py: 20,
    $px: 50,
    $border_color: "gray5",
    $border_weight: 1.4,
  };

  const forgotStyleProps: TextStyleProps = {
    $color: "white",
    $typo: "regular4",
    $isUnderline: true,
    $isPointer: true,
  };
  return (
    <Container>
      <FormWrapper>
        <RoleButtonWrapper>
          <Button
            label="Sign in"
            onClick={() => onChangeRole({ role: "SIGN_IN" })}
            {...roleButtonStyleProps({ role: "SIGN_IN" })}
          />
          <Button
            label="New account"
            onClick={() => onChangeRole({ role: "SIGN_UP" })}
            {...roleButtonStyleProps({ role: "SIGN_UP" })}
          />
        </RoleButtonWrapper>
        <Form onSubmit={currRole === "SIGN_IN" ? onSignIn : onSignUp}>
          <InputWrapper>
            <InputIconWrapper>
              <Icon src={Icons.person} alt="person" size={30} />
            </InputIconWrapper>
            <Input
              placeholder="ID"
              name="id"
              type="text"
              value={inputs.id}
              onChange={onChange}
              {...inputStyleProps}
            />
          </InputWrapper>
          {currRole === "SIGN_UP" && (
            <InputWrapper>
              <InputIconWrapper>
                <Icon src={Icons.person} alt="person" size={30} />
              </InputIconWrapper>
              <Input
                placeholder="name"
                name="name"
                type="text"
                value={inputs.name}
                onChange={onChange}
                {...inputStyleProps}
              />
            </InputWrapper>
          )}
          {currRole === "SIGN_UP" && (
            <InputWrapper>
              <InputIconWrapper>
                <Icon src={Icons.person} alt="person" size={30} />
              </InputIconWrapper>
              <Input
                placeholder="E-mail"
                name="mail"
                type="text"
                value={inputs.mail}
                onChange={onChange}
                {...inputStyleProps}
              />
            </InputWrapper>
          )}
          <InputWrapper>
            <InputIconWrapper>
              <Icon src={Icons.key} alt="key" size={34} />
            </InputIconWrapper>
            <Input
              placeholder="Password"
              name="password"
              type={isHide ? "password" : "text"}
              value={inputs.password}
              onChange={onChange}
              {...inputStyleProps}
            />
            <HideTrigger onClick={onHideToggle}>
              <Text label={isHide ? "Show" : "Hide"} />
            </HideTrigger>
          </InputWrapper>
          {currRole === "SIGN_UP" && (
            <InputWrapper>
              <InputIconWrapper>
                <Icon src={Icons.key} alt="key" size={34} />
              </InputIconWrapper>
              <Input
                placeholder="Confirm Password"
                name="confirmPassword"
                type={isHide ? "password" : "text"}
                value={inputs.confirmPassword}
                onChange={onChange}
                {...inputStyleProps}
              />
              <HideTrigger onClick={onHideToggle}>
                <Text label={isHide ? "Show" : "Hide"} />
              </HideTrigger>
            </InputWrapper>
          )}
          <Button
            label={currRole === "SIGN_IN" ? "Login" : "Create Account"}
            type="submit"
            $typo="bold4"
            $py={20}
          />
        </Form>
      </FormWrapper>
      {currRole === "SIGN_IN" && (
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
`;

const FormWrapper = styled.div`
  width: 700px;
  border: none;
  border-radius: 6px;
  overflow: hidden;
  background-color: ${theme.color.white};
`;

const RoleButtonWrapper = styled.div`
  display: flex;
`;

const Form = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HideTrigger = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-40%, -50%);
  padding: 4px 0 4px 18px;
  border-left: 1.4px solid ${theme.color.gray5};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FindWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
