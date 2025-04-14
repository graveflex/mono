import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import MakeVariations from '@mono/web/payload/utils/makeVariations';
import type { Block } from 'payload';

const HeaderSectionsBlock = (prefix: string): Block => ({
  slug: 'headerSectionsBlock',
  interfaceName: 'HeaderSectionsBlockT',
  dbName: `${prefix}HeaderSectionsBlock`,
  fields: [
    BlockConfig(),
    MakeVariations(2, prefix, 'HeaderSectionsBlock'),
    {
      name: 'content',
      label: 'content',
      type: 'richText',
      localized: true,
      required: false
    }
  ]
});

export default HeaderSectionsBlock;
