import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';
import RichText from '@mono/web/components/RichText/index';
import Video from '@mono/web/components/Video';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import type { HeroSectionsBlockType } from '../index';

function HeroSections9({ content, media }: HeroSectionsBlockType) {
  const mediaRelation = media?.relationTo;
  return (
    <section
      className="bg-background py-16 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="container px-6 flex flex-col items-center gap-12 lg:gap-16 m-auto">
        {/* Hero Content */}
        <div className="flex flex-col gap-6 lg:gap-8 flex-1 max-w-2xl items-center text-center mx-auto">
          <div className="flex flex-col gap-4 lg:gap-5">
            {content && <RichText data={content} />}
          </div>
          {/* CTA Button */}
          <Button
            className="md:flex-1"
            aria-label="Get started with our service"
          >
            Get started
            <ArrowRight />
          </Button>
        </div>

        {/* Video Section */}
        <AspectRatio ratio={16 / 9}>
          {mediaRelation === 'videos' ? (
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
    </section>
  );
}

export default HeroSections9;
