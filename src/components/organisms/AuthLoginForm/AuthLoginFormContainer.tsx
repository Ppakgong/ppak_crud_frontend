import { ChangeEvent, FormEvent, useState } from "react";
import AuthLoginForm from "./AuthLoginForm";

const AuthLoginFormContainer = () => {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const onChange = ({ e }: { e: ChangeEvent<HTMLInputElement> }) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  return <AuthLoginForm {...inputs} onChange={onChange} onSubmit={onSubmit} />;
};

export default AuthLoginFormContainer;
