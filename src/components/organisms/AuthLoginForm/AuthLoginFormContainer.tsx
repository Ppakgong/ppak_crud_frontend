import { ChangeEvent, useState } from "react";
import AuthLoginForm from "./AuthLoginForm";

const AuthLoginFormContainer = () => {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const onChange = ({ e }: { e: ChangeEvent<HTMLInputElement> }) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return <AuthLoginForm {...inputs} onChange={onChange} />;
};

export default AuthLoginFormContainer;
