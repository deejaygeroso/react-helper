import type { Meta, StoryFn } from '@storybook/react';

import AppThemeProvider from '../AppThemeProvider';
import Button from './Button';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'ui/Button',
};
export default Story;

const Template: StoryFn<typeof Button> = args => (
  <AppThemeProvider>
    <Button
      {...args}
      onClick={function () {
        alert('Button Clicked');
      }}>
      Primary
    </Button>
  </AppThemeProvider>
);

export const PrimaryButton = Template.bind({});

PrimaryButton.args = { };
