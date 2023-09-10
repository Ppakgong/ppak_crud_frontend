import { Link } from "react-router-dom";
import styled from "styled-components";
import { PropsWithChildren } from "react";

export type AnchorProps = {
  href: string;
};

const Anchor = ({
  href,
  children,
  ...props
}: PropsWithChildren<AnchorProps>) => {
  return (
    <Index to={href} {...props}>
      {children}
    </Index>
  );
};

export default Anchor;

const Index = styled(Link)`
  text-decoration: none;
`;
