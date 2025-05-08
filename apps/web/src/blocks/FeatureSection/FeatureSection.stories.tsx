// Types
type Story = StoryObj<FeatureSectionType>;
import type { Meta, StoryObj } from '@storybook/react';
import type { FeatureSectionType } from '.';
import featureSectionContentMockData from './FeatureSectionMockData';

// Components
import FeatureSection from '.';

// Helpers
import MakeVariations from '@mono/web/payload/utils/makeStoryBookVariations';

// Constants
const VARIATIONS = 5;

const meta: Meta<FeatureSectionType> = {
  title: 'blocks/FeatureSection',
  component: FeatureSection,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: MakeVariations(VARIATIONS)
  }
};

export default meta;

export const Variant1: Story = {
  args: {
    variant: '1',
    content: featureSectionContentMockData.data
  }
};

export const Variant2: Story = {
  args: {
    variant: '2',
    content: featureSectionContentMockData.data
  }
};

export const Variant3: Story = {
  args: {
    variant: '3',
    content: featureSectionContentMockData.data
  }
};

export const Variant4: Story = {
  args: {
    variant: '4',
    content: featureSectionContentMockData.data
  }
};

export const Variant5: Story = {
  args: {
    variant: '5',
    content: featureSectionContentMockData.data
  }
};
