import { useState } from "react";
import Menu from "./Menu";

export type MenuRoleButton = "FreeBoard" | "SecretBoard" | "Board";

const MenuContainer = () => {
  const [role, setRole] = useState<MenuRoleButton>("FreeBoard");

  const onChangeRole = ({ role }: { role: MenuRoleButton }) => {
    setRole(role);
  };
  return <Menu role={role} onChangeRole={onChangeRole} />;
};

export default MenuContainer;
