import { ComponentStory, ComponentMeta } from "@storybook/react";

import AuthHeader from "./AuthHeader";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/organisms/AuthHeader",
  component: AuthHeader,
} as ComponentMeta<typeof AuthHeader>;

const Template: ComponentStory<typeof AuthHeader> = () => <AuthHeader />;

export const Primary = Template.bind({});
Primary.args = {};
