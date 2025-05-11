import type { Meta, StoryObj } from '@storybook/react';

import type { RichTextType } from '.';
import RichText from '.';
import richTextMockData, {
  payloadTypography,
  embedRichTextMockData
} from './richTextMockData';

const meta: Meta<RichTextType> = {
  title: 'ui/RichText',
  component: RichText,
  decorators: [
    (Story) => (
      <div className="bg-background p-16 w-full">
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<RichTextType>;

export const Defaults: Story = {
  args: richTextMockData
};

export const PayloadTypography: Story = {
  args: payloadTypography
};

export const WithEmbeds: Story = {
  args: embedRichTextMockData
};
