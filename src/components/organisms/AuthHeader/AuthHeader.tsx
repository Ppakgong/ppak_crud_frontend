import styled from "styled-components";
import Text from "../../atoms/Text/Text";

const AuthHeader = () => {
  return (
    <Header>
      <Text label="Ppak Community" typo="bold1" />
    </Header>
  );
};

export default AuthHeader;

const Header = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
