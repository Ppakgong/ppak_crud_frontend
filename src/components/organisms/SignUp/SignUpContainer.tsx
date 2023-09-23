import { FormEvent } from "react";
import useInput from "../../../hooks/useInput";
import SignUp from "./SignUp";

const SignUpContainer = () => {
  const { inputs, onChange } = useInput({
    id: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { id, name, email, password, confirmPassword } = inputs;

  /**
   * 회원가입 로직
   */
  const regex_id = /^[a-zA-Z0-9]*$/;
  const regex_name = /^[A-Za-z가-힣\s]+$/;
  const regex_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regex_password = /^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\|/]).{8,}$/;

  const onValidId = ({ id }: { id: string }) => {
    if (regex_id.test(id)) {
      return true;
    }
    return false;
  };

  const onValidName = ({ name }: { name: string }) => {
    if (regex_name.test(name)) {
      return true;
    }
    return false;
  };

  const onValidEmail = ({ email }: { email: string }) => {
    if (regex_email.test(email)) {
      return true;
    }
    return false;
  };

  const onValidPassword = ({ password }: { password: string }) => {
    if (regex_password.test(password)) {
      return true;
    }
    return false;
  };

  const onValidConfirmPassword = ({
    password,
    confirmPassword,
  }: {
    password: string;
    confirmPassword: string;
  }) => {
    if (password === confirmPassword) {
      return true;
    }
    return false;
  };

  const isValidTotal = () => {
    if (
      !onValidId({ id }) ||
      !onValidName({ name }) ||
      !onValidEmail({ email }) ||
      !onValidPassword({ password }) ||
      !onValidConfirmPassword({ password, confirmPassword })
    ) {
      return true;
    }

    return false;
  };

  const onSignUp = async (e: FormEvent) => {
    e.preventDefault();
    alert("환영합니다!");
    window.location.reload();
  };

  return (
    <SignUp
      id={inputs.id}
      name={inputs.name}
      email={inputs.email}
      password={inputs.password}
      confirmPassword={inputs.confirmPassword}
      onChange={onChange}
      onSignUp={onSignUp}
      onValidId={onValidId}
      onValidName={onValidName}
      onValidEmail={onValidEmail}
      onValidPassword={onValidPassword}
      onValidConfirmPassword={onValidConfirmPassword}
      isValidTotal={isValidTotal()}
    />
  );
};

export default SignUpContainer;
