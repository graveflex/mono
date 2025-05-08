import type { Meta, StoryObj } from '@storybook/react';
import {
  ctaRightContent,
  ctaSection1MockData,
  ctaSection2MockData,
  ctaSection3MockData,
  ctaSection4MockData
} from './CtaSectionsMockData';

import wrapperMockData from '@mono/web/components/Wrapper/wrapperMockData';
import type { CtaSectionsBlockType } from '.';
import CtaSectionsBlock from '.';

const meta: Meta<CtaSectionsBlockType> = {
  title: 'blocks/CtaSectionsBlock',
  component: CtaSectionsBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<CtaSectionsBlockType>;

export const Defaults: Story = {
  args: {
    variant: '1',
    content: ctaSection1MockData.data,
    wrapper: wrapperMockData
  }
};

export const One: Story = {
  args: {
    variant: '1',
    content: ctaSection1MockData.data,
    wrapper: wrapperMockData
  }
};

export const Two: Story = {
  args: {
    variant: '2',
    content: ctaSection2MockData.data,
    wrapper: wrapperMockData,
    rightContent: ctaRightContent.data
  }
};

export const Three: Story = {
  args: {
    variant: '3',
    content: ctaSection3MockData.data,
    wrapper: wrapperMockData
  }
};

export const Four: Story = {
  args: {
    variant: '4',
    content: ctaSection4MockData.data,
    wrapper: wrapperMockData
  }
};

export const Five: Story = {
  args: {
    variant: '5',
    content: ctaSection3MockData.data,
    wrapper: wrapperMockData
  }
};
