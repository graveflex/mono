import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/web/components/RichText/index';
import Video from '@mono/web/components/Video';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Rocket } from 'lucide-react';
import type { FeatureSectionType } from '..';
import { genImgColumnOrder } from '..';

export default function Variant5({
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">
                  Benefit driven feature title
                </h3>
                <p className="md:text-sm text-muted-foreground">
                  Shortly describe how this feature solves a specific user
                  problem. Focus on benefits not on technical details.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">
                  Benefit driven feature title
                </h3>
                <p className="md:text-sm text-muted-foreground">
                  Shortly describe how this feature solves a specific user
                  problem. Focus on benefits not on technical details.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">
                  Benefit driven feature title
                </h3>
                <p className="md:text-sm text-muted-foreground">
                  Shortly describe how this feature solves a specific user
                  problem. Focus on benefits not on technical details.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">
                  Benefit driven feature title
                </h3>
                <p className="md:text-sm text-muted-foreground">
                  Shortly describe how this feature solves a specific user
                  problem. Focus on benefits not on technical details.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex-1 w-full ${imgColumnOrder}`}>
          <AspectRatio ratio={3 / 4}>
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
