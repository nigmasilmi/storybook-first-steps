import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "../../components/Label";

export default {
  title: "UI/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Basic = Template.bind({});
export const AllCaps = Template.bind({});
export const Secondary = Template.bind({});
