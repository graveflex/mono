import { faker } from '@faker-js/faker';
import type { PricingSectionsBlockT } from '@mono/types/payload-types';

export const PricingSectionsBlockSchema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: 'PricingSectionsBlock',
    blockType: 'pricingSectionsBlock',
    variant: '1'
  } as PricingSectionsBlockT;
};
