import { AspectRatio } from '@mono/web/components/ui/AspectRatio';
import { Avatar, AvatarImage } from '@mono/web/components/ui/Avatar';
import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import type { FeatureSectionType } from '..';

export default function Variant12() {
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
