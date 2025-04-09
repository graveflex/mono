import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload';

const variantsWithSplitContent = ['2'];

const CtaSectionsBlock: Block = {
  slug: 'ctaSectionsBlock',
  interfaceName: 'CtaSectionsBlockT',
  fields: [
    BlockConfig(),
    {
      type: 'select',
      name: 'variant',
      label: 'Variant',
      defaultValue: '1',
      required: true,
      options: [
        {
          label: '1',
          value: '1'
        },
        {
          label: '2',
          value: '2'
        },
        {
          label: '3',
          value: '3'
        },
        {
          label: '4',
          value: '4'
        },
        {
          label: '5',
          value: '5'
        }
      ],
      admin: {
        description: 'The layout variant for the block.'
      }
    },
    {
      name: 'title',
      label: 'title',
      type: 'text',
      localized: true,
      required: false
    },
    {
      name: 'content',
      label: 'content',
      type: 'richText',
      localized: true,
      required: false
    },
    {
      name: 'rightContent',
      label: 'Right Content',
      type: 'richText',
      localized: true,
      required: false,
      admin: {
        description:
          'On desktop, the content section is split in half. This field corresponds to the right side on desktop.',
        condition: (_, siblingData) => {
          if (variantsWithSplitContent.includes(siblingData.variant)) {
            return true;
          }
          return false;
        }
      }
    }
  ]
};

export default CtaSectionsBlock;
