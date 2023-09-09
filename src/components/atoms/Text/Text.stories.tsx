import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "./Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/atoms/Text",
  component: Text,
  tags: ["autodocs"],
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Bold = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Bold.args = {
  label: "Bold",
  typo: "bold1",
};

export const Medium = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Medium.args = {
  label: "Medium",
  typo: "medium4",
};

export const Regular = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Regular.args = {
  label: "Regular",
  typo: "regular6",
};
