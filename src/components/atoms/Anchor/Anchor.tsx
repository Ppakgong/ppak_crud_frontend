import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import theme, { ColorType, TypoType } from "../../../styles/theme";

export type AnchorStyleProps = {
  $color?: ColorType;
  $typo?: TypoType;
  $gradient?: {
    startColor: ColorType;
    endColor: ColorType;
  };
};

export type AnchorProps = AnchorStyleProps & {
  href: string;
  label: string;
};

const Anchor = ({ href, label, ...props }: AnchorProps) => {
  return (
    <Index to={href} {...props}>
      {label}
    </Index>
  );
};

export default Anchor;

const Index = styled(Link)<AnchorStyleProps>`
  text-decoration: none;
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
`;
