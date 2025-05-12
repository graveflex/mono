import type { Nav } from '@mono/types/payload-types';
import type { Meta, StoryObj } from '@storybook/react';

import type { HeaderProps } from '.';
import Header from '.';
import { apiResponse } from './mockData';

const meta: Meta<HeaderProps> = {
  title: 'ui/Header',
  component: Header,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<HeaderProps>;

export const Defaults: Story = {
  args: apiResponse.header as Nav['header']
};
