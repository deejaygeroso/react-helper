import type { ComponentMeta, ComponentStory } from '@storybook/react';

import AppThemeProvider from '../AppThemeProvider';
import Button from './Button';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = args => (
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

PrimaryButton.args = {
  buttonType: 'Primary',
};
