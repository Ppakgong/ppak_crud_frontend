import styled from "styled-components";
import theme, { TypoType } from "../../../styles/theme";
import { ACCENT_COLOR } from "../../../utils/constant";

export type TextAreaStyleProps = {
  $typo?: TypoType;
  $py?: number;
  $px?: number;
};

export type TextAreaProps = TextAreaStyleProps & {
  placeholder: string;
  name: string;
  value?: string;
};

const TextArea = ({ placeholder, name, value }: TextAreaProps) => {
  return <Index placeholder={placeholder} name={name} value={value}></Index>;
};

export default TextArea;

const Index = styled.textarea<TextAreaStyleProps>`
  width: 100%;
  height: 100%;
  padding: ${({ $py = 14, $px = 17 }) => `${$py}px ${$px}px`};
  ${({ $typo = "regular4" }) => theme.typo[$typo]}
  border-radius: 6px;
  border: 1px solid ${theme.color.gray1};
  transition: box-shadow 0.3s;
  outline: none;
  resize: none;
  font-family: sans-serif;

  &:focus {
    border-color: ${theme.color[ACCENT_COLOR]};
    box-shadow: ${theme.shadow.normal};
  }
`;
