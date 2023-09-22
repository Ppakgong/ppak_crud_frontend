import { ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import IconInput from "../../molecules/IconInput/IconInput";
import Icons from "../../../utils/icons";
import Button from "../../atoms/Button/Button";

export type SignUpProps = {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSignUp: (e: FormEvent) => Promise<void>;
};

const SignUp = ({
  id,
  name,
  email,
  password,
  confirmPassword,
  onChange,
  onSignUp,
}: SignUpProps) => {
  return (
    <Form onSubmit={onSignUp}>
      <IconInput
        iconProps={{ src: Icons.person, alt: "person" }}
        inputProps={{ name: "id", placeholder: "ID", value: id, onChange }}
      />
      <IconInput
        iconProps={{ src: Icons.person, alt: "person" }}
        inputProps={{
          name: "name",
          placeholder: "name",
          value: name,
          onChange,
        }}
      />
      <IconInput
        iconProps={{ src: Icons.person, alt: "person" }}
        inputProps={{
          name: "email",
          placeholder: "email",
          value: email,
          onChange,
        }}
      />
      <IconInput
        iconProps={{ src: Icons.key, alt: "key" }}
        inputProps={{
          name: "password",
          placeholder: "password",
          value: password,
          onChange,
          type: "password",
        }}
      />
      <IconInput
        iconProps={{ src: Icons.key, alt: "key" }}
        inputProps={{
          name: "confirmPassword",
          placeholder: "Confirm Password",
          value: confirmPassword,
          onChange,
          type: "password",
        }}
      />
      <Button label="Complete" type="submit" $typo="bold4" $py={20} />
    </Form>
  );
};

export default SignUp;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
