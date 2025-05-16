import { faker } from '@faker-js/faker';
import type { BannersBlockT } from '@mono/types/payload-types';

export const BannersBlockSchema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: 'BannersBlock',
    blockType: 'bannersBlock',
    variant: '1'
  } as BannersBlockT;
};
