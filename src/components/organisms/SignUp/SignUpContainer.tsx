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

  const regex_id = /^[a-zA-Z0-9]*$/;

  /**
   * @returns true면 validation 통과, false면 에러
   */
  const onValidId = ({ id }: { id: string }) => {
    // 아이디 validation
    // 아이디는 숫자와 문자만을 받을 수 있다.
    if (regex_id.test(id)) {
      return true;
    }
    return false;
  };

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
      onValidId={onValidId}
    />
  );
};

export default SignUpContainer;
