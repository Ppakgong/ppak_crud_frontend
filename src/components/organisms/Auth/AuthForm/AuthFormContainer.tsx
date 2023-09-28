import { useState } from "react";
import AuthForm from "./AuthForm";

export type AuthRoleButton = "SignIn" | "SignUP";

const AuthFormContainer = () => {
  const [role, setRole] = useState<AuthRoleButton>("SignIn");

  const onChangeRole = ({ role }: { role: AuthRoleButton }) => {
    setRole(role);
  };

  return <AuthForm role={role} onChangeRole={onChangeRole} />;
};

export default AuthFormContainer;
