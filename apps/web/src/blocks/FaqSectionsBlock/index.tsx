// Types
import type { FaqSectionsBlockT as PayloadType } from '@mono/types/payload-types';

import dynamic from 'next/dynamic';
// Libraries
import React from 'react';

// Components
import Wrapper from '@mono/web/components/Wrapper';

export type FaqSectionsBlockType = Omit<PayloadType, 'blockType'>;

const defaultOpts = {
  suspense: true,
  ssr: true
};

const Variants = {
  '1': dynamic(() => import('./variations/Variant1'), { ...defaultOpts }),
  '2': dynamic(() => import('./variations/Variant2'), { ...defaultOpts }),
  '3': dynamic(() => import('./variations/Variant3'), { ...defaultOpts }),
  '4': dynamic(() => import('./variations/Variant4'), { ...defaultOpts })
};

function FaqSectionsBlock({
  content,
  items,
  variant,
  ...props
}: FaqSectionsBlockType) {
  const VariantComponent = Variants[variant];

  return (
    <Wrapper {...props.wrapper}>
      <VariantComponent content={content} items={items} variant={variant} />
    </Wrapper>
  );
}

export default FaqSectionsBlock;
