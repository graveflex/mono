import { faker } from '@faker-js/faker';
import type { FeatureSection } from '@mono/types/payload-types';

export const FeatureSectionSchema = async () => {
  return {
    id: faker.string.uuid(),
    blockName: 'FeatureSection',
    blockType: 'featureSection',
    variant: '1'
  } as FeatureSection;
};
