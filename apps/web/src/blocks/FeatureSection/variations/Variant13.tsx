import { Check } from 'lucide-react';
import type { FeatureSectionType } from '..';

export default function Variant13() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 md:gap-16">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">
              Feature section
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Headline that shows solution's impact on user success
            </h2>
            <p className="text-base text-muted-foreground">
              Explain in one or two concise sentences how your solution
              transforms users' challenges into positive outcomes. Focus on the
              end benefits that matter most to your target audience. Keep it
              clear and compelling.
            </p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
          <div className="flex gap-4">
            <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground font-semibold">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Explain how this feature addresses a specific user need or
                challenge. Use the headline to highlight the benefits it offers.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground font-semibold">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Explain how this feature addresses a specific user need or
                challenge. Use the headline to highlight the benefits it offers.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground font-semibold">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Explain how this feature addresses a specific user need or
                challenge. Use the headline to highlight the benefits it offers.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground font-semibold">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Explain how this feature addresses a specific user need or
                challenge. Use the headline to highlight the benefits it offers.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground font-semibold">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Explain how this feature addresses a specific user need or
                challenge. Use the headline to highlight the benefits it offers.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground font-semibold">
                Benefit driven feature title
              </h3>
              <p className="text-muted-foreground">
                Explain how this feature addresses a specific user need or
                challenge. Use the headline to highlight the benefits it offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
