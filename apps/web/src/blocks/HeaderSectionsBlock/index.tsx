// Types
import type { HeaderSectionsBlockT as PayloadType } from '@mono/types/payload-types';

import dynamic from 'next/dynamic';
// Libraries
import React from 'react';

// Components
import Wrapper from '@mono/web/components/Wrapper';

export type HeaderSectionsBlockType = Omit<PayloadType, 'blockType'>;

const defaultOpts = {
  suspense: true,
  ssr: true
};

const Variants = {
  '1': dynamic(() => import('./variations/Variant1'), { ...defaultOpts }),
  '2': dynamic(() => import('./variations/Variant2'), { ...defaultOpts })
};

function HeaderSectionsBlock({
  content,
  variant,
  wrapper
}: HeaderSectionsBlockType) {
  const VariantComponent = Variants[variant];

  return (
    <Wrapper {...wrapper}>
      <VariantComponent content={content} variant={variant} />
    </Wrapper>
  );
}

export default HeaderSectionsBlock;
