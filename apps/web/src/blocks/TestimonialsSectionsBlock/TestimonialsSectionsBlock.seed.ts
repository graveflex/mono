import { faker } from '@faker-js/faker';
import type { TestimonialsSectionsBlockT } from '@mono/types/payload-types';

export const TestimonialsSectionsBlockSchema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: 'TestimonialsSectionsBlock',
    blockType: 'testimonialsSectionsBlock',
    variant: '1'
  } as TestimonialsSectionsBlockT;
};
