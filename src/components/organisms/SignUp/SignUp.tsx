import { ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import IconInput from "../../molecules/IconInput/IconInput";
import Icons from "../../../utils/icons";
import Button from "../../atoms/Button/Button";
import Error from "../../atoms/Error/Error";

export type SignUpProps = {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSignUp: (e: FormEvent) => Promise<void>;
  onValidId: ({ id }: { id: string }) => boolean;
  onValidName: ({ name }: { name: string }) => boolean;
  onValidEmail: ({ email }: { email: string }) => boolean;
  onValidPassword: ({ password }: { password: string }) => boolean;
  onValidConfirmPassword: ({
    password,
    confirmPassword,
  }: {
    password: string;
    confirmPassword: string;
  }) => boolean;
  isValidTotal: boolean;
};

const SignUp = ({
  id,
  name,
  email,
  password,
  confirmPassword,
  onChange,
  onSignUp,
  onValidId,
  onValidName,
  onValidEmail,
  onValidPassword,
  onValidConfirmPassword,
  isValidTotal,
}: SignUpProps) => {
  return (
    <Form onSubmit={onSignUp}>
      <ErrorInput>
        <IconInput
          iconProps={{ src: Icons.person, alt: "person" }}
          inputProps={{
            name: "id",
            placeholder: "ID",
            value: id,
            onChange,
          }}
        />
        <Error isError={!onValidId({ id })} label="영어, 숫자만 가능합니다." />
      </ErrorInput>
      <ErrorInput>
        <IconInput
          iconProps={{ src: Icons.person, alt: "person" }}
          inputProps={{
            name: "name",
            placeholder: "name",
            value: name,
            onChange,
          }}
        />
        <Error
          isError={!onValidName({ name })}
          label="영어, 한글만 가능합니다."
        />
      </ErrorInput>
      <ErrorInput>
        <IconInput
          iconProps={{ src: Icons.person, alt: "person" }}
          inputProps={{
            name: "email",
            placeholder: "email",
            value: email,
            onChange,
          }}
        />
        <Error
          isError={!onValidEmail({ email })}
          label="이메일 형식에 맞지 않습니다."
        />
      </ErrorInput>
      <ErrorInput>
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
        <Error
          isError={!onValidPassword({ password })}
          label="8자 이상, 특수기호 1개 이상 포함해야 합니다."
        />
      </ErrorInput>
      <ErrorInput>
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
        <Error
          isError={!onValidConfirmPassword({ password, confirmPassword })}
          label="비밀번호가 일치하지 않습니다."
        />
      </ErrorInput>

      <Button
        label="Complete"
        type="submit"
        $typo="bold4"
        $py={20}
        isDisabled={isValidTotal}
      />
    </Form>
  );
};

export default SignUp;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const ErrorInput = styled.div``;
