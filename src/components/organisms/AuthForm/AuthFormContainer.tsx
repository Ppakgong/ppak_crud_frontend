import { ChangeEvent, FormEvent, useState } from "react";
import AuthForm from "./AuthForm";

export type AuthButtonRole = "SIGN_IN" | "SIGN_UP";

const AuthFormContainer = () => {
  const [currRole, setCurrRole] = useState<AuthButtonRole>("SIGN_IN");
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });
  const [isHide, setIsHide] = useState(true);

  const onChangeRole = ({ role }: { role: AuthButtonRole }) => {
    setCurrRole(role);
  };

  const onChange = ({ e }: { e: ChangeEvent<HTMLInputElement> }) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onHideToggle = () => {
    setIsHide((prev) => !prev);
  };

  const onSignin = async (e: FormEvent) => {
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
      onSignin={onSignin}
    />
  );
};

export default AuthFormContainer;
