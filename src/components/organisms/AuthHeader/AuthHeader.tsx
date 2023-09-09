import styled from "styled-components";
import Text from "../../atoms/Text/Text";

const AuthHeader = () => {
  return (
    <Header>
      <Text
        label="MS Community"
        $typo="bold1"
        $color="black"
        $gradient={{ startColor: "purple1", endColor: "red1" }}
      />
    </Header>
  );
};

export default AuthHeader;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
