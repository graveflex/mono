import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import Image from 'next/image';
import type { FeatureSectionType } from '..';

export default function Variant14() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">
            Feature section
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Headline that shows solution's impact on user success
          </h2>
          <p className="text-base text-muted-foreground">
            Explain in one or two concise sentences how your solution transforms
            users' challenges into positive outcomes. Focus on the end benefits
            that matter most to your target audience. Keep it clear and
            compelling.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="https://ui.shadcn.com/placeholder.svg"
                  alt="Card image"
                  fill={true}
                  className="rounded-xl object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem. Focus on user's benefits not on technical details.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="https://ui.shadcn.com/placeholder.svg"
                  alt="Card image"
                  fill={true}
                  className="rounded-xl object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem. Focus on user's benefits not on technical details.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="https://ui.shadcn.com/placeholder.svg"
                  alt="Card image"
                  fill={true}
                  className="rounded-xl object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Shortly describe how this feature solves a specific user
                problem. Focus on user's benefits not on technical details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
