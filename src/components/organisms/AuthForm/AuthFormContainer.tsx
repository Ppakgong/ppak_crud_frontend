import { ChangeEvent, FormEvent, useState } from "react";
import AuthForm from "./AuthForm";

export type AuthButtonRole = "SIGN_IN" | "SIGN_UP";

const AuthFormContainer = () => {
  const [currRole, setCurrRole] = useState<AuthButtonRole>("SIGN_IN");
  const [inputs, setInputs] = useState({
    id: "",
    name: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });
  const [isHide, setIsHide] = useState(true);

  const onChangeRole = ({ role }: { role: AuthButtonRole }) => {
    setCurrRole(role);
    setInputs({
      id: "",
      name: "",
      mail: "",
      password: "",
      confirmPassword: "",
    });
  };

  const onChange = ({ e }: { e: ChangeEvent<HTMLInputElement> }) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onHideToggle = () => {
    setIsHide((prev) => !prev);
  };

  const onSignIn = async (e: FormEvent) => {
    e.preventDefault();
  };

  const onSignUp = async (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <AuthForm
      currRole={currRole}
      onChangeRole={onChangeRole}
      inputs={inputs}
      onChange={onChange}
      isHide={isHide}
      onHideToggle={onHideToggle}
      onSignIn={onSignIn}
      onSignUp={onSignUp}
    />
  );
};

export default AuthFormContainer;
