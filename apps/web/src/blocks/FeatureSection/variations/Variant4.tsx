import RichText from '@mono/web/components/RichText/index';
import type { FeatureSectionType } from '..';

export default function Variant4({
  additionalContent,
  content
}: FeatureSectionType) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 md:gap-16">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 md:gap-5">
            {content && <RichText data={content} />}
          </div>
        </div>
        <div className="flex  flex-1">
          {additionalContent && <RichText data={additionalContent} />}
        </div>
      </div>
    </section>
  );
}
