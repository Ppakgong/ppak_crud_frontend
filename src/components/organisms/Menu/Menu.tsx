import styled from "styled-components";
import theme from "../../../styles/theme";
import { MenuRoleButton } from "./MenuContainer";
import Button, { ButtonStyleProps } from "../../atoms/Button/Button";

export type MenuProps = {
  role: MenuRoleButton;
  onChangeRole: ({ role }: { role: MenuRoleButton }) => void;
};

const Menu = ({ role, onChangeRole }: MenuProps) => {
  const buttonStyleProps = ({
    role,
    targetRole,
  }: {
    role: MenuRoleButton;
    targetRole: MenuRoleButton;
  }): ButtonStyleProps => {
    return {
      $bg_color: role === targetRole ? "purple1" : "white",
      $color: role === targetRole ? "white" : "gray4",
      $typo: "medium4",
      $border_radius: 0,
      $py: 14,
    };
  };

  return (
    <Container>
      <Button
        label="자유게시판"
        onClick={() => onChangeRole({ role: "FreeBoard" })}
        {...buttonStyleProps({ role, targetRole: "FreeBoard" })}
      />
      <Button
        label="익명게시판"
        onClick={() => onChangeRole({ role: "SecretBoard" })}
        {...buttonStyleProps({ role, targetRole: "SecretBoard" })}
      />
      <Button
        label="게시판"
        onClick={() => onChangeRole({ role: "Board" })}
        {...buttonStyleProps({ role, targetRole: "Board" })}
      />
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  border-top: 1px solid ${theme.color.gray5};
  border-bottom: 1px solid ${theme.color.gray5};
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
