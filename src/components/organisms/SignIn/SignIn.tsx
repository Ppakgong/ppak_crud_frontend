import { ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import IconInput from "../../molecules/IconInput/IconInput";
import Icons from "../../../utils/icons";
import Button from "../../atoms/Button/Button";

export type SignInProps = {
  id: string;
  password: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSignIn: (e: FormEvent) => Promise<void>;
};

const SignIn = ({ id, password, onChange, onSignIn }: SignInProps) => {
  return (
    <Form onSubmit={onSignIn}>
      <IconInput
        iconProps={{ src: Icons.person, alt: "person" }}
        inputProps={{ name: "id", placeholder: "ID", value: id, onChange }}
      />
      <IconInput
        iconProps={{ src: Icons.key, alt: "key" }}
        inputProps={{
          name: "password",
          placeholder: "Password",
          value: password,
          onChange,
          type: "password",
        }}
      />
      <Button label="Login" type="submit" $typo="bold4" $py={20} />
    </Form>
  );
};

export default SignIn;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
