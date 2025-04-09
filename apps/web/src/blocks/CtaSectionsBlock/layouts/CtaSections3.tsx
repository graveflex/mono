import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import React from 'react';

import RichText from '@mono/web/components/RichText/index';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import Image from 'next/image';

export type CtaSectionsBlockType = Omit<PayloadType, 'blockType'>;

function CtaSections3({ content }: CtaSectionsBlockType) {
  return (
    <section className="bg-background" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:p-16 lg:rounded-xl bg-background">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:max-w-full max-w-xl mx-auto">
          {/* Left Column - Image */}
          <div className="flex-1 w-full">
            <AspectRatio ratio={1}>
              <Image
                src="https://ui.shadcn.com/placeholder.svg"
                alt="CTA section image"
                fill={true}
                className="rounded-xl object-cover"
              />
            </AspectRatio>
          </div>
          {/* Right Column - Content */}
          <div className="flex flex-col items-center lg:items-start gap-8 md:gap-10 flex-1">
            {/* Section Header */}
            <div className="flex flex-col gap-4 md:gap-5 text-center lg:text-left">
              {content && <RichText data={content} className="max-w-lg" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSections3;
