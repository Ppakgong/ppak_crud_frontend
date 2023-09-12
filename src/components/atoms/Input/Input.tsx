import styled from "styled-components";
import theme, { ColorType, TypoType } from "../../../styles/theme";
import { ChangeEvent } from "react";
import { ACCENT_COLOR } from "../../../utils/constant";

export type InputStyleProps = {
  $color?: ColorType;
  $typo?: TypoType;
  $py?: number;
  $px?: number;
  $border_radius?: number;
  $border_weight?: number;
  $border_color?: ColorType;
};

export type InputProps = InputStyleProps & {
  placeholder: string;
  type?: "text" | "password" | "number";
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

/**
 *
 * @param color default: gray1
 * @param typo default: regular4
 * @param py default: 14
 * @param px default: 17
 * @param borderRadius default: 6
 * @param borderColor default: gray1
 * @returns
 */
const Input = ({
  placeholder,
  type = "text",
  value,
  onChange,
  name,
  ...props
}: InputProps) => {
  return (
    <Index
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      autoComplete="off"
      {...props}
    />
  );
};

export default Input;

const Index = styled.input<InputStyleProps>`
  width: 100%;
  height: 100%;
  color: ${({ $color = "gray1" }) => theme.color[$color]};
  ${({ $typo = "regular4" }) => theme.typo[$typo]}
  border: ${({ $border_weight = 1, $border_color = "gray1" }) =>
    `${$border_weight}px solid ${theme.color[$border_color]}`};
  border-radius: ${({ $border_radius = 6 }) => `${$border_radius}px`};
  outline: none;
  padding: ${({ $py = 14, $px = 17 }) => `${$py}px ${$px}px`};
  transition: box-shadow 0.3s;

  &:focus {
    border-color: ${theme.color[ACCENT_COLOR]};
    box-shadow: ${theme.shadow.normal};
  }
`;
