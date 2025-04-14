import { ArrowRight, Rocket } from 'lucide-react';
import Link from 'next/link';
import type { FeatureSectionType } from '..';

export default function Variant10() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 lg:max-w-xl mx-auto lg:text-center">
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
