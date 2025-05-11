import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import RichText from '@mono/web/components/RichText/index';
import Video from '@mono/web/components/Video';
import React from 'react';

import { genImgColumnOrder } from '@mono/web/blocks/CtaSectionsBlock';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';

import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';

export type CtaSectionsBlockType = Omit<PayloadType, 'blockType'>;

function CtaSections5({ content, media, mediaPosition }: CtaSectionsBlockType) {
  const mediaRelation = media?.relationTo;
  const imgColumnOrder = genImgColumnOrder(mediaPosition);

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
            <div
              className={`flex flex-1 w-full pl-6 lg:pl-0 ${imgColumnOrder}`}
            >
              <AspectRatio ratio={4 / 3}>
                {mediaRelation === 'videos' &&
                typeof media?.value === 'number' ? (
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
        </div>
      </div>
    </section>
  );
}

export default CtaSections5;
