import type { Meta, StoryObj } from '@storybook/react';
import heroSectionsMockData, {
  heroSectionsWithFormMockData,
  imgMockData,
  videoMockData
} from './HeroSectionsMockData';

import type { HeroSectionsBlockType } from '.';
import HeroSectionsBlock from '.';

const meta: Meta<HeroSectionsBlockType> = {
  title: 'blocks/HeroSectionsBlock',
  component: HeroSectionsBlock,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },
  argTypes: {
    mediaPosition: {
      control: 'select',
      options: ['right', 'left']
    },
    variant: {
      control: 'select',
      options: ['1', '2', '3']
    }
  },
  decorators: [(Story) => <div className="bg-background">{Story()}</div>],
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<HeroSectionsBlockType>;

export const Defaults: Story = {
  args: {
    mediaPosition: 'left',
    variant: '1',
    content: heroSectionsMockData.data,
    media: imgMockData
  }
};

// Story name corresponds to variant number:
export const One: Story = {
  args: {
    mediaPosition: 'left',
    variant: '1',
    content: heroSectionsMockData.data,
    media: imgMockData
  }
};

export const OneWithVideo: Story = {
  args: {
    mediaPosition: 'left',
    variant: '1',
    content: heroSectionsMockData.data,
    media: videoMockData
  }
};

export const OneWithForm: Story = {
  args: {
    mediaPosition: 'right',
    variant: '1',
    content: heroSectionsWithFormMockData.data,
    media: imgMockData
  }
};

export const Two: Story = {
  args: {
    variant: '2',
    mediaPosition: 'right',
    content: heroSectionsMockData.data,
    media: imgMockData
  }
};

export const TwoWithForm: Story = {
  args: {
    variant: '2',
    mediaPosition: 'right',
    content: heroSectionsWithFormMockData.data,
    media: imgMockData
  }
};

export const Three: Story = {
  args: {
    variant: '3',
    content: heroSectionsMockData.data,
    media: videoMockData
  }
};

export const ThreeWithForm: Story = {
  args: {
    variant: '3',
    content: heroSectionsWithFormMockData.data,
    media: videoMockData
  }
};

export const ThreeWithImage: Story = {
  args: {
    variant: '3',
    content: heroSectionsMockData.data,
    media: imgMockData
  }
};
