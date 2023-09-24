import styled from "styled-components";

export type IconProps = {
  src: string;
  alt: string;
  size?: number;
};

const Icon = ({ src, alt, size = 34 }: IconProps) => {
  return <Index src={src} alt={alt} width={size} height={size} />;
};

export default Icon;

const Index = styled.img``;
