import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ctaRightContent,
  ctaSection1MockData,
  ctaSection2MockData,
  ctaSection3MockData,
  ctaSection4MockData,
  ctaSection5MockData
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
    title: faker.lorem.words(5),
    variant: '1',
    content: ctaSection1MockData.data,
    wrapper: wrapperMockData
  }
};

export const One: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '1',
    content: ctaSection1MockData.data,
    wrapper: wrapperMockData
  }
};

export const Two: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '2',
    content: ctaSection2MockData.data,
    wrapper: wrapperMockData,
    rightContent: ctaRightContent.data
  }
};

export const Three: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '3',
    content: ctaSection3MockData.data,
    wrapper: wrapperMockData
  }
};

export const Four: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '4',
    content: ctaSection4MockData.data,
    wrapper: wrapperMockData
  }
};

export const Five: Story = {
  args: {
    title: faker.lorem.words(5),
    variant: '5',
    content: ctaSection5MockData.data,
    wrapper: wrapperMockData
  }
};
