import styled from "styled-components";
import theme, { ColorType, TypoType } from "../../../styles/theme";

export type InputStyleProps = {
  color?: ColorType;
  typo?: TypoType;
  py?: number;
  px?: number;
  borderRadius?: number;
};

export type InputProps = InputStyleProps & {
  placeholder: string;
  value?: string;
  onChange: () => void;
  name: string;
};

/**
 *
 * @param color default: gray1
 * @param typo default: regular4
 * @param py default: 14
 * @param px default: 17
 * @borderRadius default: 6
 * @returns
 */
const Input = ({
  placeholder,
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
      {...props}
    />
  );
};

export default Input;

const Index = styled.input<InputStyleProps>`
  width: 100%;
  height: 100%;
  color: ${({ color = "gray1" }) => theme.color[color]};
  ${({ typo = "regular4" }) => theme.typo[typo]}
  border: 1px solid ${theme.color.gray1};
  border-radius: ${({ borderRadius = 6 }) => `${borderRadius}px`};
  outline: none;
  padding: ${({ py = 14, px = 17 }) => `${py}px ${px}px`};
`;
