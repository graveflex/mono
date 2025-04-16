import RichText from '@mono/web/components/RichText/index';
import { ArrowRight, Rocket } from 'lucide-react';
import Link from 'next/link';
import type { FeatureSectionType } from '..';

export default function Variant3({ content }: FeatureSectionType) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 lg:max-w-xl mx-auto lg:text-center">
          {content && <RichText data={content} />}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          <div className="flex flex-col gap-5">
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
            <Link
              href="#"
              className="flex gap-2 items-center text-primary font-medium hover:text-primary/90"
            >
              Learn more
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-5">
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
            <Link
              href="#"
              className="flex gap-2 items-center text-primary font-medium hover:text-primary/90"
            >
              Learn more
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-5">
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
            <Link
              href="#"
              className="flex gap-2 items-center text-primary font-medium hover:text-primary/90"
            >
              Learn more
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
