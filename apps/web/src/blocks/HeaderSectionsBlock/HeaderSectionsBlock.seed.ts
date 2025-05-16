import { faker } from '@faker-js/faker';
import type { HeaderSectionsBlockT } from '@mono/types/payload-types';

export const HeaderSectionsBlockSchema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: 'HeaderSectionsBlock',
    blockType: 'headerSectionsBlock',
    variant: '1'
  } as HeaderSectionsBlockT;
};
