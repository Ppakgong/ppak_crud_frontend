import styled from "styled-components";
import Text from "../../atoms/Text/Text";
import theme from "../../../styles/theme";

const AuthHeader = () => {
  return (
    <Header>
      <Text label="Ppak Community" typo="bold1" color="black" />
    </Header>
  );
};

export default AuthHeader;

const Header = styled.header`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${theme.color.gray4};
  box-shadow: ${theme.shadow.normal};
`;
