import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/web/components/RichText/index';
import Video from '@mono/web/components/Video';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import type { FeatureSectionType } from '..';
import { genImgColumnOrder } from '..';

export default function Variant2({
  content,
  media,
  mediaPosition
}: FeatureSectionType) {
  const mediaRelation = media?.relationTo;

  const imgColumnOrder = genImgColumnOrder(mediaPosition);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
        <div className="flex-1 w-full order-2 lg:order-1">
          <AspectRatio ratio={4 / 3}>
            {mediaRelation === 'videos' &&
            typeof media?.value !== 'undefined' ? (
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
        <div
          className={`flex flex-col gap-8 flex-1 order-1 lg:order-2 ${imgColumnOrder}`}
        >
          <div className="flex flex-col gap-4 md:gap-5">
            {content && <RichText data={content} />}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button>Get access</Button>
            <Button variant="ghost">
              Learn more
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
