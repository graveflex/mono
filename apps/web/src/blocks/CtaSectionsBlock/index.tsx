import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/web/components/Wrapper';
import React from 'react';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

export type CtaSectionsBlockType = Omit<PayloadType, 'blockType'>;

const defaultOpts = {
  suspense: true,
  ssr: true
};

const layoutList: Record<string, ComponentType<CtaSectionsBlockType>> = {
  '1': dynamic(() => import('./layouts/CtaSections1'), {
    ...defaultOpts
  }),
  '2': dynamic(() => import('./layouts/CtaSections2'), {
    ...defaultOpts
  }),
  '3': dynamic(() => import('./layouts/CtaSections3'), {
    ...defaultOpts
  }),
  '4': dynamic(() => import('./layouts/CtaSections4'), {
    ...defaultOpts
  }),
  '5': dynamic(() => import('./layouts/CtaSections5'), {
    ...defaultOpts
  })
};

export const genImgColumnOrder = (
  imagePosition: CtaSectionsBlockType['mediaPosition']
) => (imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last');

function CtaSections({
  rightContent,
  variant = '1',
  content,
  media,
  mediaPosition,
  ...props
}: CtaSectionsBlockType) {
  const Component: ComponentType<CtaSectionsBlockType> = layoutList[variant];
  return (
    <Wrapper {...props.wrapper}>
      <Component
        variant={variant}
        content={content}
        rightContent={rightContent}
        media={media}
        mediaPosition={mediaPosition}
      />
    </Wrapper>
  );
}

export default CtaSections;
