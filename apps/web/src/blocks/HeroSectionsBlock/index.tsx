import type { HeroSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/web/components/Wrapper';
import dynamic from 'next/dynamic';
import React from 'react';
import type { ComponentType } from 'react';

export type HeroSectionsBlockType = Omit<PayloadType, 'blockType'>;

const defaultOpts = {
  suspense: true,
  ssr: true
};

const layoutList: Record<string, ComponentType<HeroSectionsBlockType>> = {
  '1': dynamic(() => import('./layouts/HeroSections1'), {
    ...defaultOpts
  }),
  '2': dynamic(() => import('./layouts/HeroSections2'), {
    ...defaultOpts
  }),
  '3': dynamic(() => import('./layouts/HeroSections3'), {
    ...defaultOpts
  })
};

export const genImgColumnOrder = (
  imagePosition: HeroSectionsBlockType['mediaPosition']
) => (imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last');

function HeroSectionsBlock({
  content,
  variant = '1',
  mediaPosition,
  media,
  wrapper
}: HeroSectionsBlockType) {
  const Component: ComponentType<HeroSectionsBlockType> = layoutList[variant];

  return (
    <Wrapper {...wrapper}>
      <Component
        content={content}
        media={media}
        mediaPosition={mediaPosition}
        variant={variant}
      />
    </Wrapper>
  );
}

export default HeroSectionsBlock;
