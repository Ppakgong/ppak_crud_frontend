import styled from "styled-components";
import Text from "../../atoms/Text/Text";
import theme from "../../../styles/theme";

const ListItem = () => {
  const list = [
    {
      id: 1,
      no: 1,
      title: "제목1",
      writer: "글쓴이1",
    },
    {
      id: 2,
      no: 2,
      title: "제목2",
      writer: "글쓴이2",
    },
    {
      id: 3,
      no: 3,
      title: "제목3",
      writer: "글쓴이3",
    },
    {
      id: 4,
      no: 4,
      title: "제목4",
      writer: "글쓴이4",
    },
    {
      id: 5,
      no: 5,
      title: "제목5",
      writer: "글쓴이5",
    },
    {
      id: 6,
      no: 6,
      title: "제목6",
      writer: "글쓴이6",
    },
    {
      id: 7,
      no: 7,
      title: "제목7",
      writer: "글쓴이7",
    },
    {
      id: 8,
      no: 8,
      title: "제목8",
      writer: "글쓴이8",
    },
    {
      id: 9,
      no: 9,
      title: "제목9",
      writer: "글쓴이9",
    },
    {
      id: 10,
      no: 10,
      title: "제목10",
      writer: "글쓴이10",
    },
  ];
  return (
    <Container>
      {list.map((list) => {
        return (
          <List key={list.id}>
            <Text label={list.no} $color="gray2" $typo="medium5" />
            <Text label={list.title} $color="gray2" $typo="medium5" />
            <Text label={list.writer} $color="gray2" $typo="medium5" />
          </List>
        );
      })}
    </Container>
  );
};

export default ListItem;

const Container = styled.div``;

const List = styled.div`
  padding: 12px 0px;
  display: grid;
  grid-template-columns: 1fr 20fr 2fr;
  text-align: center;
  border-bottom: 1px solid ${theme.color.gray5};
`;
