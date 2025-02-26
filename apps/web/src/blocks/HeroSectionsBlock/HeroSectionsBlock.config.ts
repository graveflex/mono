import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload';

// Block variants w/ left or right positioned media:
const variantsWithImagePosition = ['1'];

const HeroSectionsBlock = (prefix: string): Block => ({
  slug: 'heroSectionsBlock',
  interfaceName: 'HeroSectionsBlockT',
  dbName: `${prefix}herSecB`,
  fields: [
    BlockConfig(),
    {
      type: 'select',
      name: 'variant',
      label: 'Variant',
      defaultValue: '1',
      required: true,
      enumName: 'vrnt',
      dbName: `${prefix}herSecB_v`,
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
        }
      ],
      admin: {
        description: 'The layout variant for the block.'
      }
    },
    {
      name: 'content',
      label: 'content',
      type: 'richText',
      localized: true,
      required: false
    },
    {
      name: 'media',
      label: 'Media',
      type: 'relationship',
      relationTo: ['images', 'videos'],
      hasMany: false,
      required: true,
      admin: {
        description:
          'All variants accept images or video except variant 2. Variant 2 only allows images.'
      }
    },
    {
      name: 'mediaPosition',
      label: 'Media Position',
      type: 'select',
      options: [
        {
          label: 'Left',
          value: 'left'
        },
        {
          label: 'Right',
          value: 'right'
        }
      ],
      defaultValue: 'right',
      admin: {
        description:
          'For certain variants, the position of the image on desktop screens.',
        condition: (_, siblingData) => {
          if (variantsWithImagePosition.includes(siblingData.variant)) {
            return true;
          }
          return false;
        }
      }
    }
  ]
});

export default HeroSectionsBlock;
