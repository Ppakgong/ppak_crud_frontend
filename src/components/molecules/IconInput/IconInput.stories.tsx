import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconInput from "./IconInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/molecules/IconInput",
  component: IconInput,
} as ComponentMeta<typeof IconInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconInput> = (args) => (
  <IconInput {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
