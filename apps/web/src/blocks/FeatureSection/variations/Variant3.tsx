import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/web/components/RichText/index';
import Video from '@mono/web/components/Video';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Rocket } from 'lucide-react';
import type { FeatureSectionType } from '..';
import { genImgColumnOrder } from '..';

export default function Variant3({
  content,
  media,
  mediaPosition
}: FeatureSectionType) {
  const mediaRelation = media?.relationTo;

  const imgColumnOrder = genImgColumnOrder(mediaPosition);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 md:gap-5">
            {content && <RichText data={content} />}
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">
                  Benefit driven feature title
                </h3>
                <p className="text-muted-foreground">
                  Shortly describe how this feature solves a specific user
                  problem. Focus on benefits not on technical details.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">
                  Benefit driven feature title
                </h3>
                <p className="text-muted-foreground">
                  Shortly describe how this feature solves a specific user
                  problem. Focus on benefits not on technical details.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-1 w-full ${imgColumnOrder}`}>
          <AspectRatio ratio={1}>
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
