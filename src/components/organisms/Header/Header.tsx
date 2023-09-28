import styled from "styled-components";
import Text from "../../atoms/Text/Text";

const Header = () => {
  return (
    <Container>
      <Text
        label="MS Community"
        $color="purple1"
        $typo="bold2"
        $gradient={{ startColor: "purple1", endColor: "red1" }}
      />
      <Text label="이름" $color="gray4" $typo="regular5" />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 26px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
