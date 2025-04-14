import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import Video from '@mono/web/components/Video';
import React from 'react';

import RichText from '@mono/web/components/RichText/index';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';

import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';

export type CtaSectionsBlockType = Omit<PayloadType, 'blockType'>;

function CtaSections4({ content, media }: CtaSectionsBlockType) {
  const mediaRelation = media?.relationTo;

  return (
    <section
      className="bg-background py-16 lg:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mx-auto">
        {/* Left Column - Content */}
        <div className="flex flex-col gap-6 lg:gap-8 flex-1">
          {/* Section Header */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {content && <RichText data={content} />}
          </div>
        </div>
        {/* Right Column - Image */}
        <div className="flex-1 w-full">
          <AspectRatio ratio={1 / 1} className="aspect-ratio">
            {mediaRelation === 'videos' && typeof media?.value === 'number' ? (
              <Video
                className="object-cover w-full h-full rounded-lg"
                video={media?.value}
              />
            ) : (
              <ResponsivePayloadImage
                image={media?.value}
                sizes="(max-width: 1023px) 100vw, 50vw"
                alt="Hero section visual"
                fill={true}
                imgClasses="rounded-xl object-cover w-full h-full"
              />
            )}
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

export default CtaSections4;
