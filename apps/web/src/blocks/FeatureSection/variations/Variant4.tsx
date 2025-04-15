import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/web/components/RichText/index';
import Video from '@mono/web/components/Video';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight, Check } from 'lucide-react';
import type { FeatureSectionType } from '..';
import { genImgColumnOrder } from '..';

export default function Variant4({
  content,
  media,
  mediaPosition
}: FeatureSectionType) {
  const mediaRelation = media?.relationTo;

  const imgColumnOrder = genImgColumnOrder(mediaPosition);

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mx-auto">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4">
            {content && <RichText data={content} />}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <span className="text-card-foreground text-base font-medium leading-6">
                Benefit driven feature title
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <span className="text-card-foreground text-base font-medium leading-6">
                Benefit driven feature title
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <span className="text-card-foreground text-base font-medium leading-6">
                Benefit driven feature title
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button>Get access</Button>
            <Button variant="ghost">
              Learn more
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right column: Hero image */}
        <div className={`flex-1 w-full ${imgColumnOrder}`}>
          {/* Square aspect ratio container for image */}
          <AspectRatio ratio={1 / 1}>
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
      </div>
    </section>
  );
}
