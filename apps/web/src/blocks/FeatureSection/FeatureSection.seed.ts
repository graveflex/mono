import type { FeatureSection } from '@mono/types/payload-types';
import { AssetSeed } from '@mono/web/lib/seed/asset';
import { BlockSeed } from '@mono/web/lib/seed/block';
import mockRichTextContent from './FeatureSectionMockData';

const mediaPositions = ['left', 'right'] as const;

export const Seed = new BlockSeed<FeatureSection>({
  blockType: 'featureSection',
  variantCount: 5,
  dependencies: ['images'],
  generateContent: async (_payload, variant) => {
    return Promise.all(
      mediaPositions.map(async (mediaPosition) => {
        const media = await AssetSeed.getRandomEntry('images');

        return {
          blockType: 'featureSection',
          content: mockRichTextContent.data,
          // additionalContent: mockRichTextContent.data,
          mediaPosition,
          media: {
            relationTo: 'images',
            value: media
          },
          variant: variant as FeatureSection['variant']
        };
      })
    );
  },
  generatePageName: function (data: FeatureSection) {
    return `${this.blockName} | ${data.variant} | ${data.mediaPosition}`;
  }
});
