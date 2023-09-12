import { ComponentStory, ComponentMeta } from "@storybook/react";

import SignUp from "./SignUp";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/organisms/SignUp",
  component: SignUp,
} as ComponentMeta<typeof SignUp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignUp> = (args) => <SignUp {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
