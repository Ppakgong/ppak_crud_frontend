import { useCallback, useState } from "react";
import AuthForm from "./AuthForm";

export enum AuthRole {
  SIGN_IN,
  SIGN_UP,
}

const AuthFormContainer = () => {
  const [currentAuthRole, setCurrentAuthRole] = useState<AuthRole>(
    AuthRole.SIGN_IN
  );

  const onChangeAuthRole = useCallback(
    ({ authRole }: { authRole: AuthRole }) => {
      setCurrentAuthRole(authRole);
    },
    []
  );

  return (
    <AuthForm
      currentAuthRole={currentAuthRole}
      onChangeAuthRole={onChangeAuthRole}
    />
  );
};

export default AuthFormContainer;
