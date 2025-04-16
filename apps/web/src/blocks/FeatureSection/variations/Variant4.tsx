import RichText from '@mono/web/components/RichText/index';
import { Check } from 'lucide-react';
import type { FeatureSectionType } from '..';

export default function Variant4({ content }: FeatureSectionType) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 md:gap-16">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 md:gap-5">
            {content && <RichText data={content} />}
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
