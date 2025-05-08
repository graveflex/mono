import { faker } from '@faker-js/faker';
import type { ContactSectionsBlockT } from '@mono/types/payload-types';

export const ContactSectionsBlockSchema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: 'ContactSectionsBlock',
    blockType: 'contactSectionsBlock',
    variant: '1'
  } as ContactSectionsBlockT;
};
