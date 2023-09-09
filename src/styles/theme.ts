import { css } from "styled-components";

const typo_weight = {
  bold: 700,
  medium: 500,
  regular: 300,
};

const typo_size = {
  xx_large: 30,
  x_large: 26,
  large: 20,
  medium: 16,
  small: 15,
  x_small: 14,
  xx_small: 12,
};

const theme = {
  color: {
    white: "#ffffff",
    black: "#252525",
    gray1: "#333333",
    gray2: "#4d4d4d",
    gray3: "#666666",
    gray4: "#808080",
  },

  typo: {
    bold1: css`
      font-weight: ${typo_weight.bold};
      font-size: ${typo_size.xx_large};
    `,
    bold2: css`
      font-weight: ${typo_weight.bold};
      font-size: ${typo_size.x_large};
    `,
    bold3: css`
      font-weight: ${typo_weight.bold};
      font-size: ${typo_size.large};
    `,
    bold4: css`
      font-weight: ${typo_weight.bold};
      font-size: ${typo_size.medium};
    `,
    bold5: css`
      font-weight: ${typo_weight.bold};
      font-size: ${typo_size.small};
    `,
    bold6: css`
      font-weight: ${typo_weight.bold};
      font-size: ${typo_size.x_small};
    `,
    bold7: css`
      font-weight: ${typo_weight.bold};
      font-size: ${typo_size.xx_small};
    `,
    medium1: css`
      font-weight: 500;
      font-size: ${typo_size.xx_large};
    `,
    medium2: css`
      font-weight: 500;
      font-size: ${typo_size.x_large};
    `,
    medium3: css`
      font-weight: 500;
      font-size: ${typo_size.large};
    `,
    medium4: css`
      font-weight: 500;
      font-size: ${typo_size.medium};
    `,
    medium5: css`
      font-weight: 500;
      font-size: ${typo_size.small};
    `,
    medium6: css`
      font-weight: 500;
      font-size: ${typo_size.x_small};
    `,
    medium7: css`
      font-weight: 500;
      font-size: ${typo_size.xx_small};
    `,
    regular1: css`
      font-weight: 400;
      font-size: ${typo_size.xx_large};
    `,
    regular2: css`
      font-weight: 400;
      font-size: ${typo_size.x_large};
    `,
    regular3: css`
      font-weight: 400;
      font-size: ${typo_size.large};
    `,
    regular4: css`
      font-weight: 400;
      font-size: ${typo_size.medium};
    `,
    regular5: css`
      font-weight: 400;
      font-size: ${typo_size.small};
    `,
    regular6: css`
      font-weight: 400;
      font-size: ${typo_size.x_small};
    `,
    regular7: css`
      font-weight: 400;
      font-size: ${typo_size.xx_small};
    `,
  },

  shadow: {
    normal: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
};

export type ColorType = keyof typeof theme.color;
export type TypoType = keyof typeof theme.typo;

export default theme;
