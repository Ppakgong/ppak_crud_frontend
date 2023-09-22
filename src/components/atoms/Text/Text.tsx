import styled from "styled-components";
import theme, { ColorType, TypoType } from "../../../styles/theme";

export type TextStyleProps = {
  $color?: ColorType;
  $typo?: TypoType;
};

export type TextProps = TextStyleProps & {
  label: string;
};

const Text = ({ label, ...props }: TextProps) => {
  return <Index {...props}>{label}</Index>;
};

export default Text;

const Index = styled.span<TextStyleProps>`
  color: ${({ $color = "gray1" }) => theme.color[$color]};
  ${({ $typo = "medium4" }) => theme.typo[$typo]}
`;
