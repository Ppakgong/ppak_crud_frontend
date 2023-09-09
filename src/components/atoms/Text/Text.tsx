import styled from "styled-components";
import theme, { ColorType, TypoType } from "../../../styles/theme";

export type TextStyleProps = {
  color?: ColorType;
  typo?: TypoType;
};

export type TextProps = TextStyleProps & {
  label: string;
};

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
