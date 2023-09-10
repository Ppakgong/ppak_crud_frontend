import { ComponentStory, ComponentMeta } from "@storybook/react";

import Anchor from "./Anchor";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/atoms/Anchor",
  component: Anchor,
  tags: ["autodocs"],
} as ComponentMeta<typeof Anchor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  href: "/",
  label: "Base",
};
