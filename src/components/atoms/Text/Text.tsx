import styled from "styled-components";
import theme, { ColorType, TypoType } from "../../../styles/theme";

export type TextStyleProps = {
  color?: ColorType;
  typo?: TypoType;
};

export type TextProps = TextStyleProps & {
  label: string;
};

/**
 *
 * @param label 텍스트
 * @param color default: gray1
 * @param typo default: medium4
 * @returns
 */
const Text = ({ label, ...props }: TextProps) => {
  return <Index {...props}>{label}</Index>;
};

export default Text;

const Index = styled.span<TextStyleProps>`
  color: ${({ color = "gray1" }) => theme.color[color]};
  ${({ typo = "medium4" }) => theme.typo[typo]}
`;
