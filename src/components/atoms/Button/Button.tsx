import styled from "styled-components";
import theme, { ColorType, TypoType } from "../../../styles/theme";
import { ACCENT_COLOR } from "../../../utils/constant";

export type ButtonStyleProps = {
  $bg_color?: ColorType;
  $color?: ColorType;
  $typo?: TypoType;
  $py?: number;
  $px?: number;
  $border_radius?: number;
};

export type ButtonProps = ButtonStyleProps & {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isDisabled?: boolean;
};

const Button = ({
  label,
  type = "button",
  onClick,
  isDisabled = false,
  ...props
}: ButtonProps) => {
  return (
    <Index type={type} onClick={onClick} {...props} disabled={isDisabled}>
      {label}
    </Index>
  );
};

export default Button;

const Index = styled.button<ButtonStyleProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ $bg_color = ACCENT_COLOR }) => theme.color[$bg_color]};
  color: ${({ $color = "white" }) => theme.color[$color]};
  ${({ $typo = "medium3" }) => theme.typo[$typo]}
  outline: none;
  padding: ${({ $py = 10, $px = 0 }) => `${$py}px ${$px}px`};
  border: none;
  border-radius: ${({ $border_radius = 6 }) => `${$border_radius}px`};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $bg_color = ACCENT_COLOR }) =>
      `${theme.color[$bg_color]}B3`};
  }

  &:disabled {
    background-color: ${({ $bg_color = ACCENT_COLOR }) =>
      `${theme.color[$bg_color]}4D`};
    cursor: no-drop;
  }
`;
