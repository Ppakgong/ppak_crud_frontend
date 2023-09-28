import Text from "../../../atoms/Text/Text";

const AuthLogo = () => {
  return (
    <Text
      label="MS Community"
      $color="purple1"
      $typo="bold2"
      $gradient={{ startColor: "purple1", endColor: "red1" }}
    />
  );
};

export default AuthLogo;
