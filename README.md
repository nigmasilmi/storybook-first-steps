# Storybook first steps

Storybook is a UI tool for development.

- Allows isolate components and test them independent of an application
- It is very useful to build UI libraries
- Those libraries can interact with owr apps end the Storybook tool will interact with the library to show the 'workshop UI' for development.

## Introduction to Storybook capabilities

[watch introductory video](https://www.youtube.com/watch?v=p-LFh5Y89eM)

## Install in root dir for an already existing project

```bash
# Add Storybook:
npx storybook init

# Run Storybook:
npm run storybook
```

## Stories

    - Special components that capture the rendered component and processes it to show in the Storybook UI
    - Technically is a function that returns the rendered component with a particular state
    - Should live alongside the component is made for
    - The Story function receives the components props, and calls them arguments or args
    - The stories are not part of the build bundle
    - The stories file names should be the same as the component but with the particle .stories. between the component name and the extension type

### Component Story format

- Stories are defined in accordance to the Component Story Format (CSF). It is a module-based standard that is portable between tools.

<strong>Must have</strong><br />

- Default export that describes the component. And is the core of the connection between the component and the Story and should have a title and a component keys, where the values are string and Component respectively.
- Named exports that describe the stories

```ts
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// this is a story
export const Primary: ComponentStory<typeof Button> = () => (
  <Button primary></Button>
);
```

<strong>Using args</strong>

- The export default must be a template
- And the stories should be binded

```ts
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// this is a template story
export const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

// the state/related stories use the template
export const Primary = template.bind({});
Primary.args = { backgroundColor: "#ff0", label: "Hello,Benjamin" };

export const Disabled = template.bind({});
Primary.args = { backgroundColor: "#ccc", label: "Not now, Benjamin" };
```

- args are reflected in Storybook UI as Controls
