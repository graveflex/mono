import { faker } from '@faker-js/faker';
import type { FaqSectionsBlockT } from '@mono/types/payload-types';

export const FaqSectionsBlockSchema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: 'FaqSectionsBlock',
    blockType: 'faqSectionsBlock',
    variant: '1'
  } as FaqSectionsBlockT;
};
