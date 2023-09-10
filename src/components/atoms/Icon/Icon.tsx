import styled from "styled-components";

export type IconsProps = {
  src: string;
  alt: string;
  size: number;
};

const Icon = ({ src, alt, size }: IconsProps) => {
  return <Index src={src} alt={alt} width={size} height={size} />;
};

export default Icon;

const Index = styled.img``;
