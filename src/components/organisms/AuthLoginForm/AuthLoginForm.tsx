import styled from "styled-components";
import theme from "../../../styles/theme";
import Input from "../../atoms/Input/Input";
import { ChangeEvent, FormEvent } from "react";
import Button from "../../atoms/Button/Button";
import Anchor from "../../atoms/Anchor/Anchor";

export type AuthLoginFormProps = {
  id: string;
  password: string;
  onChange: ({ e }: { e: ChangeEvent<HTMLInputElement> }) => void;
  onSubmit: (e: FormEvent) => Promise<void>;
};

const AuthLoginForm = ({
  id,
  password,
  onChange,
  onSubmit,
}: AuthLoginFormProps) => {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="아이디"
          name="id"
          value={id}
          onChange={onChange}
          $border_color="gray5"
        />
        <Input
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={onChange}
          $border_color="gray5"
        />
        <Button label="로그인" type="submit" />
      </Form>
      <FindWrapper>
        <Anchor href="find_pw" label="비밀번호 찾기" />
      </FindWrapper>
    </Container>
  );
};

export default AuthLoginForm;

const Container = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  box-shadow: ${theme.shadow.normal};
  border: 1px solid ${theme.color.gray5};
  border-radius: 6px;
  padding: 20px 28px;
`;

const FindWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
