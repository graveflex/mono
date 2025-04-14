import type { Meta, StoryObj } from '@storybook/react';
import type { HeaderSectionsBlockType } from '.';
import HeaderSectionsBlock from '.';
import headerSectionsMockData from './HeaderSectionsMockData';

import MakeVariations from '@mono/web/payload/utils/makeStoryBookVariations';

const meta: Meta<HeaderSectionsBlockType> = {
  title: 'blocks/HeaderSectionsBlock',
  component: HeaderSectionsBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: MakeVariations(6)
  }
};

export default meta;
type Story = StoryObj<HeaderSectionsBlockType>;

export const Variant1: Story = {
  args: {
    variant: '1',
    content: headerSectionsMockData.data
  }
};
export const Variant2: Story = {
  args: {
    variant: '2',
    content: headerSectionsMockData.data
  }
};
