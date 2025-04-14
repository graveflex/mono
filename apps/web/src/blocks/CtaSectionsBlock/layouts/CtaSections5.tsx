import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import RichText from '@mono/web/components/RichText/index';
import React from 'react';

import { AspectRatio } from '@mono/web/components/ui/AspectRatio';

import Image from 'next/image';

export type CtaSectionsBlockType = Omit<PayloadType, 'blockType'>;

function CtaSections5({ content }: CtaSectionsBlockType) {
  return (
    <section
      className="bg-background py-0 lg:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto">
        <div className="max-w-7xl overflow-hidden lg:rounded-xl pt-16 lg:pl-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column - Content */}
            <div className="flex flex-col gap-4 px-6 lg:px-0 lg:pb-16 justify-between items-center lg:items-start text-center lg:text-left lg:gap-8 flex-1 lg:max-w-full max-w-xl mx-auto">
              {/* Section Header */}
              <div className="flex flex-col gap-4 lg:gap-5">
                {content && <RichText data={content} />}
              </div>
            </div>
            {/* Right Column - Image */}
            <div className="flex flex-1 w-full pl-6 lg:pl-0">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="https://ui.shadcn.com/placeholder.svg"
                  alt="CTA section image"
                  fill={true}
                  className="rounded-tl-lg object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSections5;
