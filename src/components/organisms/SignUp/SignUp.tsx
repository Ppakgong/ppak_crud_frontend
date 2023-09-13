import { ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import IconInput from "../../molecules/IconInput/IconInput";
import Icons from "../../../utils/icons";
import Button from "../../atoms/Button/Button";

export type SignUpProps = {
  id: string;
  name: string;
  mail: string;
  password: string;
  confirmPassword: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSignUp: (e: FormEvent) => Promise<void>;
  onValidId: ({ id }: { id: string }) => boolean;
};

const SignUp = ({
  id,
  name,
  mail,
  password,
  confirmPassword,
  onChange,
  onSignUp,
  onValidId,
}: SignUpProps) => {
  return (
    <Form onSubmit={onSignUp}>
      <IconInput
        iconProps={{ src: Icons.person, alt: "person" }}
        inputProps={{ name: "id", placeholder: "ID", value: id, onChange }}
        isError={!onValidId({ id })}
      />
      <IconInput
        iconProps={{ src: Icons.person, alt: "person" }}
        inputProps={{
          name: "name",
          placeholder: "Name",
          value: name,
          onChange,
        }}
      />
      <IconInput
        iconProps={{ src: Icons.person, alt: "person" }}
        inputProps={{
          name: "mail",
          placeholder: "Mail",
          value: mail,
          onChange,
        }}
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
      <Button label="Create Account" type="submit" $typo="bold4" $py={20} />
    </Form>
  );
};

export default SignUp;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
