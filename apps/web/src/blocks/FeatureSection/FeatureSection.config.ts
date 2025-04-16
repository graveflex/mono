// Types
import type { Block } from 'payload';

// Helpers
import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import MakeVariations from '@mono/web/payload/utils/makeVariations';

// Block variants w/ left or right positioned media:
const variantsWithMedia = ['1', '2'];
const variantsWithMediaPosition = ['1'];

const FeatureSection: Block = {
  slug: 'featureSection',
  interfaceName: 'FeatureSection',
  fields: [
    BlockConfig(),
    MakeVariations(5, 'featureSection'),
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
          'All variants accept images or video except variant 2. Variant 2 only allows images.',
        condition: (_, siblingData) => {
          if (variantsWithMedia.includes(siblingData.variant)) {
            return true;
          }
          return false;
        }
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
          if (variantsWithMediaPosition.includes(siblingData.variant)) {
            return true;
          }
          return false;
        }
      }
    }
  ]
};

export default FeatureSection;
