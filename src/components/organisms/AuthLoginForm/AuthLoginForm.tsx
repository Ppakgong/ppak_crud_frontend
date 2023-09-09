import styled from "styled-components";
import theme from "../../../styles/theme";
import Input from "../../atoms/Input/Input";
import { ChangeEvent } from "react";

export type AuthLoginFormProps = {
  id: string;
  password: string;
  onChange: ({ e }: { e: ChangeEvent<HTMLInputElement> }) => void;
};

const AuthLoginForm = ({ id, password, onChange }: AuthLoginFormProps) => {
  return (
    <Container>
      <Form>
        <Input
          placeholder="아이디"
          name="id"
          value={id}
          onChange={onChange}
          borderColor="gray5"
        />
        <Input
          placeholder="비밀번호"
          name="password"
          value={password}
          onChange={onChange}
          borderColor="gray5"
        />
      </Form>
    </Container>
  );
};

export default AuthLoginForm;

const Container = styled.div`
  box-shadow: ${theme.shadow.normal};
  border: 1px solid ${theme.color.gray5};
  border-radius: 6px;
  padding: 20px 28px;
  width: 460px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
