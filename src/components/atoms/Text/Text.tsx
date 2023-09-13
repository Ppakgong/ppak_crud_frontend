import styled, { css } from "styled-components";
import theme, { ColorType, TypoType } from "../../../styles/theme";

export type TextStyleProps = {
  $color?: ColorType;
  $typo?: TypoType;
  $gradient?: {
    startColor: ColorType;
    endColor: ColorType;
  };
  $isUnderline?: boolean;
  $isPointer?: boolean;
};

export type TextProps = TextStyleProps & {
  label: string;
};

/**
 *
 * @param label 텍스트
 * @param color default: gray1
 * @param typo default: medium4
 * @param gradient 우측방향으로 startColor to endColor
 * @param isUnderline default: false
 * @param isPointer default: false
 * @returns
 */
const Text = ({ label, ...props }: TextProps) => {
  return <Index {...props}>{label}</Index>;
};

export default Text;

const Index = styled.span<TextStyleProps>`
  color: ${({ $color = "gray1" }) => theme.color[$color]};
  ${({ $typo = "medium4" }) => theme.typo[$typo]}
  ${({ $gradient }) =>
    $gradient &&
    css`
      background: linear-gradient(
        to right,
        ${theme.color[$gradient.startColor]} 11%,
        ${theme.color[$gradient.endColor]} 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
    text-decoration: ${({ $isUnderline = false }) =>
    $isUnderline ? "underline" : "none"};
  cursor: ${({ $isPointer = false }) => ($isPointer ? "pointer" : "normal")};
`;
