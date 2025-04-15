// Types
import type { FeatureSection as PayloadType } from '@mono/types/payload-types';

import dynamic from 'next/dynamic';
// Libraries
import React from 'react';

// Components
import Wrapper from '@mono/web/components/Wrapper';

export type FeatureSectionType = Omit<PayloadType, 'blockType'>;

const defaultOpts = {
  suspense: true,
  ssr: true
};

const Variants = {
  '1': dynamic(() => import('./variations/Variant1'), { ...defaultOpts }),
  '2': dynamic(() => import('./variations/Variant2'), { ...defaultOpts }),
  '3': dynamic(() => import('./variations/Variant3'), { ...defaultOpts }),
  '4': dynamic(() => import('./variations/Variant4'), { ...defaultOpts }),
  '5': dynamic(() => import('./variations/Variant5'), { ...defaultOpts }),
  '6': dynamic(() => import('./variations/Variant5'), { ...defaultOpts }),
  '7': dynamic(() => import('./variations/Variant5'), { ...defaultOpts }),
  '8': dynamic(() => import('./variations/Variant5'), { ...defaultOpts }),
  '9': dynamic(() => import('./variations/Variant5'), { ...defaultOpts }),
  '10': dynamic(() => import('./variations/Variant5'), { ...defaultOpts }),
  '11': dynamic(() => import('./variations/Variant5'), { ...defaultOpts }),
  '12': dynamic(() => import('./variations/Variant5'), { ...defaultOpts }),
  '13': dynamic(() => import('./variations/Variant5'), { ...defaultOpts }),
  '14': dynamic(() => import('./variations/Variant5'), { ...defaultOpts })
};

export const genImgColumnOrder = (
  imagePosition: FeatureSectionType['mediaPosition']
) => (imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last');

function FeatureSection({
  content,
  media,
  mediaPosition,
  variant,
  ...props
}: FeatureSectionType) {
  const VariantComponent = Variants[variant];

  return (
    <Wrapper {...props.wrapper}>
      <VariantComponent
        content={content}
        media={media}
        mediaPosition={mediaPosition}
        variant={variant}
      />
    </Wrapper>
  );
}

export default FeatureSection;
