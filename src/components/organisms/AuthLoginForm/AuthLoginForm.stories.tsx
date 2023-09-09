import { ComponentStory, ComponentMeta } from "@storybook/react";

import AuthLoginForm from "./AuthLoginForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/organisms/AuthLoginForm",
  component: AuthLoginForm,
  tags: ["autodocs"],
} as ComponentMeta<typeof AuthLoginForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AuthLoginForm> = (args) => (
  <AuthLoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
