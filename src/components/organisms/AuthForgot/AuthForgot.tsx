import styled from "styled-components";
import Text from "../../atoms/Text/Text";
import theme from "../../../styles/theme";

const AuthForgot = () => {
  return (
    <Container>
      <Text
        label={"Forgot your ID?"}
        $color="white"
        $typo="medium5"
        $isPointer={true}
      />
      <Text
        label={"Forgot your Password?"}
        $color="white"
        $typo="medium5"
        $isPointer={true}
      />
    </Container>
  );
};

export default AuthForgot;

const Container = styled.div`
  display: flex;
  gap: 20px;
  color: ${theme.color.white};
`;
