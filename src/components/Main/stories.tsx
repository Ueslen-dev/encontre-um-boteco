import { Story, Meta } from '@storybook/react/types-6-0';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'Texto de descrição'
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
