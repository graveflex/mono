import RichText from '@mono/web/components/RichText/index';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import type { FeatureSectionType } from '..';

export default function Variant7({ content }: FeatureSectionType) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6 flex flex-col gap-12">
        <div className="flex flex-col gap-8 flex-1">
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
        <div className="flex-1 w-full">
          <AspectRatio ratio={4 / 3}>
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Hero image"
              fill={true}
              className="rounded-xl object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
