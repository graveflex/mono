import RichText from '@mono/web/components/RichText/index';
import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import type { FeatureSectionType } from '..';

export default function Variant8({ content }: FeatureSectionType) {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mx-auto">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4">
            {content && <RichText data={content} />}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                54%
              </h3>
              <p className="md:text-sm text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem. Focus on benefits not on technical details.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                88%
              </h3>
              <p className="md:text-sm text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem. Focus on benefits not on technical details.
              </p>
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

        <div className="flex-1 w-full">
          <AspectRatio ratio={1}>
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
