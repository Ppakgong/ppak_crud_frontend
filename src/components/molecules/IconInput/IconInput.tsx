import styled from "styled-components";
import Icon, { IconProps } from "../../atoms/Icon/Icon";
import Input, { InputProps } from "../../atoms/Input/Input";
import Text from "../../atoms/Text/Text";
import theme from "../../../styles/theme";
import { useMemo, useState } from "react";

export type IconInputProps = {
  iconProps: IconProps;
  inputProps: InputProps;
  isError?: boolean;
};

const IconInput = ({
  iconProps,
  inputProps,
  isError = false,
}: IconInputProps) => {
  const [isHide, setIsHide] = useState(true);

  const onToggleHide = () => {
    setIsHide((prev) => !prev);
  };

  const newIconProps: IconProps = useMemo(
    () => ({
      ...iconProps,
      size: 30,
    }),
    [iconProps]
  );

  const newInputProps: InputProps = useMemo(
    () => ({
      ...inputProps,
      $py: 20,
      $px: 50,
      $border_color: "gray5",
      $border_weight: 1.4,
      type: inputProps.type === "password" && isHide ? "password" : "text",
    }),
    [inputProps, isHide]
  );
  return (
    <Container>
      <IconWrapper>
        <Icon {...newIconProps} />
      </IconWrapper>
      <Input {...newInputProps} />
      {inputProps.type === "password" && (
        <HideWrapper onClick={onToggleHide}>
          <Text label={isHide ? "Show" : "Hide"} />
        </HideWrapper>
      )}
      <Error>{isError && <Text label="*에러" />}</Error>
    </Container>
  );
};

export default IconInput;

const Container = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HideWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-40%, -50%);
  padding: 4px 0 4px 18px;
  border-left: 1.4px solid ${theme.color.gray5};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Error = styled.div`
  position: absolute;
  padding-top: 4px;
  padding-left: 50px;
`;
