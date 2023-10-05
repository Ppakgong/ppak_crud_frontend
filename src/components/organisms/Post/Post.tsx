import styled from "styled-components";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import TextArea from "../../atoms/TextArea/Textarea";
// import theme from "../../../styles/theme";
// import { ACCENT_COLOR } from "../../../utils/constant";

const Post = () => {
  return (
    <Container>
      <Input placeholder="제목" name="title" />
      {/* <OptionWrapper>
        <Select>
          <option disabled selected>
            게시판 선택
          </option>
          <option>자유게시판</option>
          <option>익명게시판</option>
        </Select>
        <CheckBoxWrapper>
          <CheckBox type="checkbox" />
          <label>익명</label>
        </CheckBoxWrapper>
      </OptionWrapper> */}
      <ContentWrapper>
        <TextArea placeholder="내용" name="content" />
      </ContentWrapper>
      <ButtonWrapper>
        <Button label="글쓰기" $typo="bold5" $width={12} />
      </ButtonWrapper>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// const OptionWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   gap: 20px;
// `;

// const Select = styled.select`
//   width: 100%;
//   height: 100%;
//   padding: 16px 14px;
//   border: 1px solid ${theme.color.gray1};
//   border-radius: 6px;
//   font-size: ${theme.typo.regular6};
//   transition: box-shadow 0.3s;

//   outline: none;
//   &:focus {
//     border-color: ${theme.color[ACCENT_COLOR]};
//     box-shadow: ${theme.shadow.normal};
//   }
// `;

// const CheckBoxWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   align-items: center;
//   width: 70px;
//   gap: 10px;
// `;
// const CheckBox = styled.input`
//   width: 16px;
//   height: 16px;
//   border: 1px solid ${theme.color.gray1};
//   border-radius: 6px;
//   &:checked {
//     background-color: ${theme.color.purple1};
//   }
// `;

const ContentWrapper = styled.div`
  height: 400px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
