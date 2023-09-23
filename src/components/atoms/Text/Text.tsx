import styled, { css } from "styled-components";
import theme, { ColorType, TypoType } from "../../../styles/theme";

export type TextStyleProps = {
  $color?: ColorType;
  $typo?: TypoType;
  $gradient?: {
    startColor: ColorType;
    endColor: ColorType;
  };
  $isPointer?: boolean;
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
    pointer-events: none;

  ${({ $isPointer = false }) =>
    $isPointer &&
    css`
      cursor: pointer;
      pointer-events: initial;

      &:hover {
        text-decoration: underline;
      }
    `}
`;
