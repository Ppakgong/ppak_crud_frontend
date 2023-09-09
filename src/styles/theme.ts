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
      font-size: ${typo_size.xx_large}px;
    `,
    bold2: css`
      font-weight: ${typo_weight.bold};
      font-size: ${typo_size.x_large}px;
    `,
    bold3: css`
      font-weight: ${typo_weight.bold};
      font-size: ${typo_size.large}px;
    `,
    bold4: css`
      font-weight: ${typo_weight.bold};
      font-size: ${typo_size.medium}px;
    `,
    bold5: css`
      font-weight: ${typo_weight.bold};
      font-size: ${typo_size.small}px;
    `,
    bold6: css`
      font-weight: ${typo_weight.bold};
      font-size: ${typo_size.x_small}px;
    `,
    bold7: css`
      font-weight: ${typo_weight.bold};
      font-size: ${typo_size.xx_small}px;
    `,
    medium1: css`
      font-weight: 500;
      font-size: ${typo_size.xx_large}px;
    `,
    medium2: css`
      font-weight: 500;
      font-size: ${typo_size.x_large}px;
    `,
    medium3: css`
      font-weight: 500;
      font-size: ${typo_size.large}px;
    `,
    medium4: css`
      font-weight: 500;
      font-size: ${typo_size.medium}px;
    `,
    medium5: css`
      font-weight: 500;
      font-size: ${typo_size.small}px;
    `,
    medium6: css`
      font-weight: 500;
      font-size: ${typo_size.x_small}px;
    `,
    medium7: css`
      font-weight: 500;
      font-size: ${typo_size.xx_small}px;
    `,
    regular1: css`
      font-weight: 400;
      font-size: ${typo_size.xx_large}px;
    `,
    regular2: css`
      font-weight: 400;
      font-size: ${typo_size.x_large}px;
    `,
    regular3: css`
      font-weight: 400;
      font-size: ${typo_size.large}px;
    `,
    regular4: css`
      font-weight: 400;
      font-size: ${typo_size.medium}px;
    `,
    regular5: css`
      font-weight: 400;
      font-size: ${typo_size.small}px;
    `,
    regular6: css`
      font-weight: 400;
      font-size: ${typo_size.x_small}px;
    `,
    regular7: css`
      font-weight: 400;
      font-size: ${typo_size.xx_small}px;
    `,
  },

  shadow: {
    normal: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
};

export type ColorType = keyof typeof theme.color;
export type TypoType = keyof typeof theme.typo;

export default theme;
