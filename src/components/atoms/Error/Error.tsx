import styled from "styled-components";
import theme from "../../../styles/theme";

export type ErrorProps = {
  label?: string;
  isError?: boolean;
};

const Error = ({ label, isError = false }: ErrorProps) => {
  return <Index>{isError && <div>{label}</div>}</Index>;
};

export default Error;

const Index = styled.div`
  position: absolute;
  color: red;
  font-size: ${theme.typo.regular5};
  padding: 4px 46px;
`;
