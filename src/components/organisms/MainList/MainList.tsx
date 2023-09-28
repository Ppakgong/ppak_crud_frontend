import styled from "styled-components";
import Text from "../../atoms/Text/Text";
import theme from "../../../styles/theme";
import ListItem from "../../molecules/ListItem/ListItem";

const MainList = () => {
  return (
    <Container>
      <Head>
        <Text label="No" $color="gray2" $typo="bold5" />
        <Text label="제목" $color="gray2" $typo="bold5" />
        <Text label="글쓴이" $color="gray2" $typo="bold5" />
      </Head>
      <Body>
        <ListItem />
      </Body>
    </Container>
  );
};

export default MainList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Head = styled.div`
  padding: 12px 0px;
  display: grid;
  grid-template-columns: 1fr 20fr 2fr;
  text-align: center;
  border-bottom: 1px solid ${theme.color.gray5};
`;
const Body = styled.div``;
