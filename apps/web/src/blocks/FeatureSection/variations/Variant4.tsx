import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import type { FeatureSectionType } from '..';

export default function Variant4() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mx-auto">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-sm lg:text-base font-semibold">
              Feature section
            </p>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold">
              Headline that shows solution's impact on user success
            </h2>
            <p className="text-muted-foreground">
              Explain in one or two concise sentences how your solution
              transforms users' challenges into positive outcomes. Focus on the
              end benefits that matter most to your target audience. Keep it
              clear and compelling.
            </p>
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
        <div className="flex-1 w-full">
          {/* Square aspect ratio container for image */}
          <AspectRatio ratio={1 / 1}>
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Hero image"
              fill={true}
              className="rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
