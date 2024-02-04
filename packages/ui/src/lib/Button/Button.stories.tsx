import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

const Story: Meta<ButtonProps> = {
  component: Button,
  title: 'ui/Button',
};
export default Story;

export const UIStory: StoryObj<typeof Story> = {
  args: {
    children: 'Button',
    disabled: false,
  },
  argTypes: {
    action: {
      type: 'function',
      description: 'A ref for imperative actions. It currently only supports focusVisible() action',
    },
    children: {
      type: 'string',
      description: 'The content of the component.',
    },
    disabled: {
      type: 'boolean',
      description: 'If `true`, the component is disabled.',
    },
    focusableWhenDisabled: {
      type: 'boolean',
      description: 'If `true`, allows a disabled button to receive focus.',
    },
    slotProps: {
      description: 'The props used for each slot inside the Button.',
    },
    slots: {
      description:
        'The components used for each slot inside the Button. Either a string to use a HTML element or a component.',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'google.com',
    },
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
};
