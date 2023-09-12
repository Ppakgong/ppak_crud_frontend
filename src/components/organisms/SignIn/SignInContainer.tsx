import { FormEvent, useCallback } from "react";
import useInput from "../../../hooks/useInput";
import SignIn from "./SignIn";

const SignInContainer = () => {
  const { inputs, onChange } = useInput({
    id: "",
    password: "",
  });

  /**
   * 로그인 로직
   */
  const onSignIn = useCallback(async (e: FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <SignIn
      id={inputs.id}
      password={inputs.password}
      onChange={onChange}
      onSignIn={onSignIn}
    />
  );
};

export default SignInContainer;
