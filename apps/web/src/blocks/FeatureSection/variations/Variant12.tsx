import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/web/components/RichText/index';
import Video from '@mono/web/components/Video';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Avatar, AvatarImage } from '@mono/web/components/ui/Avatar';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import type { FeatureSectionType } from '..';
import { genImgColumnOrder } from '..';

export default function Variant12({
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
          <div className="flex flex-col sm:flex-row gap-3">
            <Button>Get access</Button>
            <Button variant="ghost">
              Learn more
              <ArrowRight />
            </Button>
          </div>
          <div className="flex flex-col gap-6 md:px-6 md:py-4 md:border-l md:border-border">
            <p className="text-base text-muted-foreground">
              "This is a customer testimonial that supports the feature text
              above. Lorem ipsum dolor sit amet, consectetur adipiscing elit
              interdum hendrerit ex vitae sodales."
            </p>
            <div className="flex flex-row items-center gap-4">
              <Avatar className="h-10 w-10 md:h-8 md:w-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Lando Norris"
                />
              </Avatar>
              <p className="text-foreground font-medium">
                Lando Norris{' '}
                <span className="text-muted-foreground font-normal">
                  - Product Designer
                </span>
              </p>
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
