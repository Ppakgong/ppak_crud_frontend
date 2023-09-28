import { FormEvent } from "react";
import useInput from "../../../../hooks/useInput";
import SignIn from "./SignIn";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../../utils/constant";

const SignInContainer = () => {
  const navigate = useNavigate();
  const { inputs, onChange } = useInput({
    id: "",
    password: "",
  });
  const { id, password } = inputs;

  /**
   * 로그인 로직
   */
  const login = async () => {
    const { data } = await axios.get(
      `${API_URL}/user?id=${id}&password=${password}`
    );

    if (data.ok === true) {
      navigate("/");
      return;
    }
  };

  const onSignIn = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login();
    } catch (e) {
      console.error(e);
    }
  };

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
