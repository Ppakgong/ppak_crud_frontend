import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import { withRouter } from "storybook-addon-react-router-v6";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: GlobalStyle,
    }),
    withRouter,
  ],
};

export default preview;
