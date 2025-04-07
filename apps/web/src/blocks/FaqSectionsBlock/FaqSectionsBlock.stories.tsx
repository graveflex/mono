import type { Meta, StoryObj } from '@storybook/react';
import type { FaqSectionsBlockType } from '.';
import FaqSectionsBlock from '.';
import FaqItems, {
  FaqBlockContent,
  FaqBlockContentLeftAligned
} from './FaqSectionMockData';

import MakeVariations from '@mono/web/payload/utils/makeStoryBookVariations';

const meta: Meta<FaqSectionsBlockType> = {
  title: 'blocks/FaqSectionsBlock',
  component: FaqSectionsBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: MakeVariations(4)
  }
};

export default meta;
type Story = StoryObj<FaqSectionsBlockType>;

export const Variant1: Story = {
  args: {
    variant: '1',
    content: FaqBlockContent?.data,
    items: FaqItems
  }
};
export const Variant2: Story = {
  args: {
    variant: '2',
    content: FaqBlockContentLeftAligned?.data,
    items: FaqItems
  }
};
export const Variant3: Story = {
  args: {
    variant: '3',
    content: FaqBlockContentLeftAligned?.data,
    items: FaqItems
  }
};
export const Variant4: Story = {
  args: {
    variant: '4',
    content: FaqBlockContent?.data,
    items: FaqItems
  }
};
