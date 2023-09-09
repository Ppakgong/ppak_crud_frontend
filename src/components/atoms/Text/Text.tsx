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
const Text = ({ label, color = "gray1", typo = "medium4" }: TextProps) => {
  return (
    <Index color={color} typo={typo}>
      {label}
    </Index>
  );
};

export default Text;

const Index = styled.span<{ color: ColorType; typo: TypoType }>`
  color: ${({ color }) => theme.color[color]};
  ${({ typo }) => theme.typo[typo]}
`;
