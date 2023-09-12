import { FormEvent, useCallback } from "react";
import useInput from "../../../hooks/useInput";
import SignUp from "./SignUp";

const SignUpContainer = () => {
  const { inputs, onChange } = useInput({
    id: "",
    name: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });

  /**
   * 회원가입 로직
   */
  const onSignUp = useCallback(async (e: FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <SignUp
      id={inputs.id}
      name={inputs.name}
      mail={inputs.mail}
      password={inputs.password}
      confirmPassword={inputs.confirmPassword}
      onChange={onChange}
      onSignUp={onSignUp}
    />
  );
};

export default SignUpContainer;
